package com.zdrive.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
  @GetMapping("api/health")
  public String health() {
    return "ZDrive backend is runnig";
  }
}
