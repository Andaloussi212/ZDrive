package com.zdrive.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zdrive.backend.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    List<Subject> findBySemesterId(Long semesterId);
}
