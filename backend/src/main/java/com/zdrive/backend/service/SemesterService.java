package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.Semester;
import com.zdrive.backend.model.SemesterRequest;
import com.zdrive.backend.repository.SemesterRepository;
import com.zdrive.backend.repository.SubjectRepository;

@Service
public class SemesterService {

    private final SemesterRepository semesterRepository;
    private final SubjectRepository subjectRepository;

    public SemesterService(SemesterRepository semesterRepository,SubjectRepository subjectRepository) {
        this.semesterRepository = semesterRepository;
        this.subjectRepository = subjectRepository;
    }

    public List<Semester> getSemesters() {
        return semesterRepository.findAll();
    }

    public String createSemester(SemesterRequest request) {
        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return "Le nom du semestre est obligatoire";
        }

        if (request.getYear() == null || request.getYear().trim().isEmpty()) {
            return "L'année est obligatoire";
        }

        Semester semester = new Semester(
                request.getName(),
                request.getYear(),
                request.getDescription()
        );

        semesterRepository.save(semester);

        return "Semestre ajouté";
    }

    public String updateSemester(Long id, SemesterRequest request) {
        Semester semester = semesterRepository.findById(id).orElse(null);

        if (semester == null) {
            return "Semestre introuvable";
        }

        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return "Le nom du semestre est obligatoire";
        }

        if (request.getYear() == null || request.getYear().trim().isEmpty()) {
            return "L'année est obligatoire";
        }

        semester.setName(request.getName());
        semester.setYear(request.getYear());
        semester.setDescription(request.getDescription());

        semesterRepository.save(semester);

        return "Semestre modifié";
    }

    public String deleteSemester(Long id) {
        if (!semesterRepository.existsById(id)) {
            return "Semestre introuvable";
        }

        if (subjectRepository.existsBySemesterId(id)) {
            return "Impossible de supprimer ce semestre car il contient des matières";
        }

        semesterRepository.deleteById(id);

        return "Semestre supprimé";
    }
}
