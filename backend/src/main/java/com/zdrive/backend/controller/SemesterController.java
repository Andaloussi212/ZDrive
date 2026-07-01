package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Semester;
import com.zdrive.backend.service.SemesterService;

@RestController
public class SemesterController {

    private final SemesterService semesterService;

    public SemesterController(SemesterService semesterService) {
        this.semesterService = semesterService;
    }

    @GetMapping("/api/semesters")
    public List<Semester> getSemesters() {
        return semesterService.getSemesters();
    }
}
