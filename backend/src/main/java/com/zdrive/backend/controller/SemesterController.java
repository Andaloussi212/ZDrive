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
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Semester;
import com.zdrive.backend.model.SemesterRequest;
import com.zdrive.backend.service.AdminAuthService;
import com.zdrive.backend.service.SemesterService;

@RestController
public class SemesterController {

    private final SemesterService semesterService;
    private final AdminAuthService adminAuthService;

    public SemesterController(
            SemesterService semesterService,
            AdminAuthService adminAuthService
    ) {
        this.semesterService = semesterService;
        this.adminAuthService = adminAuthService;
    }

    @GetMapping("/api/semesters")
    public List<Semester> getSemesters() {
        return semesterService.getSemesters();
    }

    @PostMapping("/api/semesters")
    public ResponseEntity<String> createSemester(
            @RequestBody SemesterRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(semesterService.createSemester(request));
    }

    @PutMapping("/api/semesters/{id}")
    public ResponseEntity<String> updateSemester(
            @PathVariable Long id,
            @RequestBody SemesterRequest request,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        return ResponseEntity.ok(semesterService.updateSemester(id, request));
    }

    @DeleteMapping("/api/semesters/{id}")
    public ResponseEntity<String> deleteSemester(
            @PathVariable Long id,
            @RequestHeader(value = "X-Admin-Password", required = false) String adminPassword
    ) {
        if (!adminAuthService.isAuthorized(adminPassword)) {
            return ResponseEntity.status(401).body("Non autorisé");
        }

        String result = semesterService.deleteSemester(id);

        if (result.equals("NOT_FOUND")) {
            return ResponseEntity.status(404).body("Semestre introuvable");
        }

        if (result.equals("HAS_SUBJECTS")) {
            return ResponseEntity.status(409).body(
                    "Impossible de supprimer ce semestre car il contient des matières"
            );
        }

        return ResponseEntity.ok("Semestre supprimé");
    }
}
