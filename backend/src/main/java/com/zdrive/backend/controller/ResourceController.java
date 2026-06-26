package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.Resource;

@RestController
public class ResourceController {
  @GetMapping("api/resources")
  public List<Resource> getResources() {
    return List.of(
      new Resource(1L, "Fiche de révision Java", "Fiche", "PDF", 1L),
      new Resource(2L, "Fiche de révision COO", "Fiche", "PDF", 2L)
    );
  }
}
