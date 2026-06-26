package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Semester;

@RestController
public class SemesterController {

  @GetMapping("/api/semesters")
  public List<Semester> getSemesters() {
    return List.of(
      new Semester(1L, "Semestre 1", "2025-2026", "Ressources du premier semestre"),
      new Semester(2L, "Semestre 2", "2025-2026", "Ressources du second semestre"),
      new Semester(3L, "Semestre 3", "2026-2027", "Ressources du troisième semestre")



    );
  }
}
