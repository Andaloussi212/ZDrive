package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.Subject;

@Service
public class SubjectService {

    private final List<Subject> subjects = List.of(
            new Subject(1L, "Bases de la programmation", 1L),
            new Subject(2L, "Conception Orienté Objet", 2L)
    );

    public List<Subject> getSubjects() {
        return subjects;
    }
}
