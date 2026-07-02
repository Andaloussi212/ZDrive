package com.zdrive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zdrive.backend.model.Semester;

public interface SemesterRepository extends JpaRepository<Semester, Long> {
}
