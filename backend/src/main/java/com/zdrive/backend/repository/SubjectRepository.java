package com.zdrive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zdrive.backend.model.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
