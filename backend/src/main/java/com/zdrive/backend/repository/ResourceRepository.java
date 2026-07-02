package com.zdrive.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zdrive.backend.model.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
}
