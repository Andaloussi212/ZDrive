package com.zdrive.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Long semesterId;

    public Subject() {
    }

    public Subject(Long id, String name, Long semesterId) {
        this.id = id;
        this.name = name;
        this.semesterId = semesterId;
    }

    public Subject(String name, Long semesterId) {
        this.name = name;
        this.semesterId = semesterId;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getSemesterId() {
        return semesterId;
    }
}
