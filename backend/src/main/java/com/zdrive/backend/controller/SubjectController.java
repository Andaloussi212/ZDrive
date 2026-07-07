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

import com.zdrive.backend.model.Subject;
import com.zdrive.backend.model.SubjectRequest;
import com.zdrive.backend.service.AdminAuthService;
import com.zdrive.backend.service.SubjectService;

@RestController
public class SubjectController {

    private final SubjectService subjectService;
    private final AdminAuthService adminAuthService;

    public SubjectController(
            SubjectService subjectService,
            AdminAuthService adminAuthService
    ) {
        this.subjectService = subjectService;
        this.adminAuthService = adminAuthService;
    }

    @GetMapping("/api/subjects")
    public List<Subject> getSubjects(@RequestParam(required = false) Long semesterId) {
        if (semesterId != null) {
            return subjectService.getSubjectsBySemesterId(semesterId);
        }

        return subjectService.getSubjects();
    }

    @PostMapping("/api/subjects")
    public ResponseEntity<String> createSubject(
            @RequestBody SubjectRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(subjectService.createSubject(request));
    }

    @PutMapping("/api/subjects/{id}")
    public ResponseEntity<String> updateSubject(
            @PathVariable Long id,
            @RequestBody SubjectRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(subjectService.updateSubject(id, request));
    }

    @DeleteMapping("/api/subjects/{id}")
    public ResponseEntity<String> deleteSubject(
            @PathVariable Long id,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(subjectService.deleteSubject(id));
    }
}
