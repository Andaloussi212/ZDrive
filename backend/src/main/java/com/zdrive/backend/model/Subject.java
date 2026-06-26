package com.zdrive.backend.model;

public class Subject {
  private long id;
  private String name;
  private long semesterId;

  public Subject(long i, String n, long s) {
    this.id = i;
    this.name = n;
    this.semesterId = s;
  }

  public long getId() {
    return this.id;
  }

  public String getName() {
    return this.name;
  }

  public long getSemesterId() {
    return this.semesterId;
  }

}
