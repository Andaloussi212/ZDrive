package com.zdrive.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String year;
    private String description;

    public Semester() {
    }

    public Semester(Long id, String name, String year, String description) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.description = description;
    }

    public Semester(String name, String year, String description) {
        this.name = name;
        this.year = year;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getYear() {
        return year;
    }

    public String getDescription() {
        return description;
    }
}
