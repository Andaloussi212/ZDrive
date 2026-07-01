package com.zdrive.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.CreateResourceRequest;
import com.zdrive.backend.model.Resource;
import com.zdrive.backend.model.UpdateResourceRequest;

@RestController
public class ResourceController {

    private final List<Resource> resources = new ArrayList<>(
            List.of(
                    new Resource(1L, "Fiche de révision Java", "FICHE", "PDF", 1L),
                    new Resource(2L, "Fiche de révision COO", "FICHE", "PDF", 2L)
            )
    );

    @GetMapping("/api/resources")
    public List<Resource> getResources() {
        return resources;
    }

    @PostMapping("/api/resources")
    public String createResource(@RequestBody CreateResourceRequest request) {
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
    @DeleteMapping("/api/resources/{id}")
    public String deleteResource(@PathVariable Long id) {
      boolean removed = resources.removeIf((resource) -> resource.getId().equals(id));

      if (removed) {
        return "Ressource supprimée";
    }

    return "Ressource introuvable";
  }

  @PutMapping("/api/resources/{id}")
public String updateResource(
        @PathVariable Long id,
        @RequestBody UpdateResourceRequest request
) {
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
