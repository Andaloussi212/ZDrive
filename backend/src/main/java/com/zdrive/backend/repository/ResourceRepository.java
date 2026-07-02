package com.zdrive.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zdrive.backend.model.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
  List<Resource> findBySubjectId(Long subjectId);
}
