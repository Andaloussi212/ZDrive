package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Subject;
import com.zdrive.backend.service.SubjectService;


@RestController
public class SubjectController {

    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping("/api/subjects")
    public List<Subject> getSubjects(@RequestParam(required = false) Long semesterId) {
        if (semesterId != null) {
            return subjectService.getSubjectsBySemesterId(semesterId);
        }

        return subjectService.getSubjects();
    }
}
