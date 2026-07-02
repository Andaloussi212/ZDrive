package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.CreateResourceRequest;
import com.zdrive.backend.model.Resource;
import com.zdrive.backend.model.UpdateResourceRequest;
import com.zdrive.backend.service.ResourceService;

@RestController
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping("/api/resources")
    public List<Resource> getResources(@RequestParam(required = false) Long subjectId) {
        if (subjectId != null) {
            return resourceService.getResourcesBySubjectId(subjectId);
        }

        return resourceService.getResources();
    }

    @PostMapping("/api/resources")
    public String createResource(@RequestBody CreateResourceRequest request) {
        return resourceService.createResource(request);
    }

    @DeleteMapping("/api/resources/{id}")
    public String deleteResource(@PathVariable Long id) {
        return resourceService.deleteResource(id);
    }

    @PutMapping("/api/resources/{id}")
    public String updateResource(
            @PathVariable Long id,
            @RequestBody UpdateResourceRequest request
    ) {
        return resourceService.updateResource(id, request);
    }
}
