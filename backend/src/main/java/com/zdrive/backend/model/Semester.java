package com.zdrive.backend.model;

public class Semester {
  private long id;
  private String name;
  private String year;
  private String description;

  public Semester(long i, String n, String y, String d) {
    this.id = i;
    this.name = n;
    this.year = y;
    this.description = d;
  }

  public long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public String getYear() {
    return this.year;
  }

  public String getDescritpion() {
    return this.description;
  }
}
