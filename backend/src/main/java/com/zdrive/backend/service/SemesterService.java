package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.Semester;

@Service
public class SemesterService {

    private final List<Semester> semesters = List.of(
            new Semester(1L, "Semestre 1", "2025-2026", "Ressources du premier semestre"),
            new Semester(2L, "Semestre 2", "2025-2026", "Ressources du second semestre"),
            new Semester(3L, "Semestre 3", "2026-2027", "Ressources du troisième semestre")
    );

    public List<Semester> getSemesters() {
        return semesters;
    }
}
