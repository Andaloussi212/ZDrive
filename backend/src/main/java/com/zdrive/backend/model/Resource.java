package com.zdrive.backend.model;

public class Resource {
  private Long id;
  private String title;
  private String type;
  private String format;
  private Long subjectId;

  public Resource(long i, String t, String ty, String f, long s) {
    this.id = i;
    this.title = t;
    this.type = ty;
    this.format = f;
    this.subjectId = s;
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
}
