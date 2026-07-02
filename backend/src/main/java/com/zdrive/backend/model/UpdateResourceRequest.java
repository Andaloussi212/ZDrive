package com.zdrive.backend.model;

public class UpdateResourceRequest {
  private String title;
  private String type;
  private String format;
  private Long subjectId;
  private String description;

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
}

