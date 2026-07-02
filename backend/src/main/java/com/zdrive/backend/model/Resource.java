package com.zdrive.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String type;
    private String format;
    private Long subjectId;

    public Resource() {
    }

    public Resource(Long id, String title, String type, String format, Long subjectId) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.format = format;
        this.subjectId = subjectId;
    }

    public Resource(String title, String type, String format, Long subjectId) {
        this.title = title;
        this.type = type;
        this.format = format;
        this.subjectId = subjectId;
    }

    public Long getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getType() {
        return this.type;
    }

    public String getFormat() {
        return this.format;
    }

    public Long getSubjectId() {
        return this.subjectId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }
}
