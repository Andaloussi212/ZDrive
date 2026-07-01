package com.zdrive.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.CreateResourceRequest;
import com.zdrive.backend.model.Resource;
import com.zdrive.backend.model.UpdateResourceRequest;

@Service
public class ResourceService {

    private final List<Resource> resources = new ArrayList<>(
            List.of(
                    new Resource(1L, "Fiche de révision Java", "FICHE", "PDF", 1L),
                    new Resource(2L, "Fiche de révision COO", "FICHE", "PDF", 2L)
            )
    );

    public List<Resource> getResources() {
        return resources;
    }

    public String createResource(CreateResourceRequest request) {
        Long newId = (long) resources.size() + 1;

        Resource newResource = new Resource(
                newId,
                request.getTitle(),
                request.getType(),
                "PDF",
                request.getSubjectId()
        );

        resources.add(newResource);

        return "Ressource ajoutée";
    }

    public String deleteResource(Long id) {
        boolean removed = resources.removeIf((resource) -> resource.getId().equals(id));

        if (removed) {
            return "Ressource supprimée";
        }

        return "Ressource introuvable";
    }

    public String updateResource(Long id, UpdateResourceRequest request) {
        for (Resource resource : resources) {
            if (resource.getId().equals(id)) {
                resource.setTitle(request.getTitle());
                resource.setType(request.getType());
                resource.setFormat(request.getFormat());
                resource.setSubjectId(request.getSubjectId());

                return "Ressource modifiée";
            }
        }

        return "Ressource introuvable";
    }
}
