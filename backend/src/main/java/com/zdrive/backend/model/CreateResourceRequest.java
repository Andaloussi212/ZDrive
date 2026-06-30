package com.zdrive.backend.model;

public class CreateResourceRequest {
  private String title;
  private String description;
  private String type;
  private Long subjectId;

  public String getTitle() {
    return this.title;
  }

  public String getDescription() {
    return this.description;
  }

  public String getType() {
    return this.type;
  }

  public Long getSubjectId() {
    return this.subjectId;
  }
}
