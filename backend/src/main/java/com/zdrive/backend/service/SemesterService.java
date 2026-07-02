package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.Semester;
import com.zdrive.backend.repository.SemesterRepository;

@Service
public class SemesterService {

    private final SemesterRepository semesterRepository;

    public SemesterService(SemesterRepository semesterRepository) {
        this.semesterRepository = semesterRepository;
    }

    public List<Semester> getSemesters() {
        return semesterRepository.findAll();
    }
}
