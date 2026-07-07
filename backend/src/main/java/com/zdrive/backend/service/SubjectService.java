package com.zdrive.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zdrive.backend.model.Subject;
import com.zdrive.backend.model.SubjectRequest;
import com.zdrive.backend.repository.ResourceRepository;
import com.zdrive.backend.repository.SubjectRepository;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final ResourceRepository resourceRepository;

    public SubjectService(SubjectRepository subjectRepository,ResourceRepository resourceRepository) {
        this.subjectRepository = subjectRepository;
        this.resourceRepository = resourceRepository;
    }

    public List<Subject> getSubjects() {
        return subjectRepository.findAll();
    }

    public List<Subject> getSubjectsBySemesterId(Long semesterId) {
        return subjectRepository.findBySemesterId(semesterId);
    }

    public String createSubject(SubjectRequest request) {
        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return "Le nom de la matière est obligatoire";
        }

        if (request.getSemesterId() == null) {
            return "Le semestre est obligatoire";
        }

        Subject subject = new Subject(
                request.getName(),
                request.getSemesterId()
        );

        subjectRepository.save(subject);

        return "Matière ajoutée";
    }

    public String updateSubject(Long id, SubjectRequest request) {
        Subject subject = subjectRepository.findById(id).orElse(null);

        if (subject == null) {
            return "Matière introuvable";
        }

        if (request.getName() == null || request.getName().trim().isEmpty()) {
            return "Le nom de la matière est obligatoire";
        }

        if (request.getSemesterId() == null) {
            return "Le semestre est obligatoire";
        }

        subject.setName(request.getName());
        subject.setSemesterId(request.getSemesterId());

        subjectRepository.save(subject);

        return "Matière modifiée";
    }

    public String deleteSubject(Long id) {
        if (!subjectRepository.existsById(id)) {
            return "NOT_FOUND";
        }

        if (resourceRepository.existsBySubjectId(id)) {
            return "HAS_RESOURCES";
        }

        subjectRepository.deleteById(id);

        return "DELETED";
    }
}
