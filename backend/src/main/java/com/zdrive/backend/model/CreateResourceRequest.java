package com.zdrive.backend.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateResourceRequest {
    @NotBlank(message = "Le titre est obligatoire")
    private String title;

    private String description;

    private String fileName;

    @NotBlank(message = "Le type est obligatoire")
    private String type;

    @NotBlank(message = "Le format est obligatoire")
    private String format;

    @NotNull(message = "La matière est obligatoire")
    private Long subjectId;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public String getFormat() {
        return format;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public String getFileName() {
        return fileName;
    }
}
