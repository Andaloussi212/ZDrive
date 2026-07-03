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
    private String description;
    private String type;
    private String format;
    private String fileName;
    private Long subjectId;
    private String fileUrl;


    public Resource() {
    }

    public Resource(Long id, String title, String description, String type, String format, String fileName, String fileUrl, Long subjectId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.format = format;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.subjectId = subjectId;
    }

    public Resource(String title, String description, String type, String format, String fileName, String fileUrl, Long subjectId) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.format = format;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
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

    public String getDescription() {
        return description;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileUrl() {
        return fileUrl;
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

    public void setDescription(String description) {
        this.description = description;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }
}
