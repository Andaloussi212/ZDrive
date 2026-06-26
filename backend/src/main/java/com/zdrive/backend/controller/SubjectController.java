package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Subject;

@RestController
public class SubjectController {
  @GetMapping("api/subjects")
  public List<Subject> getSubjects() {
    return List.of(
      new Subject(1L, "Bases de la programmation", 1L),
      new Subject(2L, "Conception Orienté Objet", 2L)
    );
  }
}
