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
        if (request.getTitle() == null || request.getTitle().trim().isEmpty()) {
            return "Le titre est obligatoire";
        }

        if (request.getType() == null || request.getType().trim().isEmpty()) {
            return "Le type est obligatoire";
        }

        if (request.getFormat() == null || request.getFormat().trim().isEmpty()) {
            return "Le format est obligatoire";
        }

        if (request.getSubjectId() == null) {
            return "La matière est obligatoire";
        }

        Resource newResource = new Resource(
            request.getTitle(),
            request.getDescription(),
            request.getType(),
            request.getFormat(),
            request.getFileName(),
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

        if (request.getTitle() == null || request.getTitle().trim().isEmpty()) {
            return "Le titre est obligatoire";
        }

        if (request.getType() == null || request.getType().trim().isEmpty()) {
            return "Le type est obligatoire";
        }

        if (request.getFormat() == null || request.getFormat().trim().isEmpty()) {
            return "Le format est obligatoire";
        }

        if (request.getSubjectId() == null) {
            return "La matière est obligatoire";
        }

        resource.setTitle(request.getTitle());
        resource.setDescription(request.getDescription());
        resource.setType(request.getType());
        resource.setFormat(request.getFormat());
        resource.setFileName(request.getFileName());
        resource.setSubjectId(request.getSubjectId());

        resourceRepository.save(resource);

        return "Ressource modifiée";
        }

    public List<Resource> getResourcesBySubjectId(Long subjectId) {
        return resourceRepository.findBySubjectId(subjectId);
    }
}
