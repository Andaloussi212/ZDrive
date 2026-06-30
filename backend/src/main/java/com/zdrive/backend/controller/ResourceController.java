package com.zdrive.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zdrive.backend.model.CreateResourceRequest;
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

  @PostMapping("/api/resources")
  public String createResource(@RequestBody CreateResourceRequest request) {
    System.out.println("Nouvelle ressource reçue : " + request.getTitle());
    System.out.println("Description : " + request.getDescription());
    System.out.println("Type : " + request.getType());
    System.out.println("Subject ID : " + request.getSubjectId());

    return "Ressource reçue";
  }
}

