package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.CreateResourceRequest;
import com.zdrive.backend.model.Resource;
import com.zdrive.backend.model.UpdateResourceRequest;
import com.zdrive.backend.service.AdminAuthService;
import com.zdrive.backend.service.ResourceService;

@RestController
public class ResourceController {

    private final ResourceService resourceService;
    private final AdminAuthService adminAuthService;

    public ResourceController(ResourceService resourceService,  AdminAuthService adminAuthService
    ) {
        this.resourceService = resourceService;
        this.adminAuthService = adminAuthService;
    }

    @GetMapping("/api/resources")
    public List<Resource> getResources(@RequestParam(required = false) Long subjectId) {
        if (subjectId != null) {
            return resourceService.getResourcesBySubjectId(subjectId);
        }

        return resourceService.getResources();
    }

    @PostMapping("/api/resources")
    public ResponseEntity<String> createResource(
            @RequestBody CreateResourceRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (isUnauthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(resourceService.createResource(request));
    }

    @DeleteMapping("/api/resources/{id}")
    public ResponseEntity<String> deleteResource(
            @PathVariable Long id,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (isUnauthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(resourceService.deleteResource(id));
    }

    @PutMapping("/api/resources/{id}")
    public ResponseEntity<String> updateResource(
            @PathVariable Long id,
            @RequestBody UpdateResourceRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (isUnauthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(resourceService.updateResource(id, request));
    }

    private boolean isUnauthorized(String adminPassword) {
        return !adminAuthService.isAuthorized(adminPassword);
    }
}
