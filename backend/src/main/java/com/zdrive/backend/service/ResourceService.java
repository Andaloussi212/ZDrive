package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.CreateResourceRequest;
import com.zdrive.backend.model.Resource;
import com.zdrive.backend.model.UpdateResourceRequest;
import com.zdrive.backend.repository.ResourceRepository;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public List<Resource> getResources() {
        return resourceRepository.findAll();
    }

    public String createResource(CreateResourceRequest request) {
        Resource newResource = new Resource(
                request.getTitle(),
                request.getType(),
                "PDF",
                request.getSubjectId()
        );

        resourceRepository.save(newResource);

        return "Ressource ajoutée";
    }

    public String deleteResource(Long id) {
        if (!resourceRepository.existsById(id)) {
            return "Ressource introuvable";
        }

        resourceRepository.deleteById(id);

        return "Ressource supprimée";
    }

    public String updateResource(Long id, UpdateResourceRequest request) {
        Resource resource = resourceRepository.findById(id).orElse(null);

        if (resource == null) {
            return "Ressource introuvable";
        }

        resource.setTitle(request.getTitle());
        resource.setType(request.getType());
        resource.setFormat(request.getFormat());
        resource.setSubjectId(request.getSubjectId());

        resourceRepository.save(resource);

        return "Ressource modifiée";
    }
}
