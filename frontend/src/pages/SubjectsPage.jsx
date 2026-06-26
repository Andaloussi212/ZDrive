import { useEffect, useState } from 'react';
import SubjectCard from '../components/SubjectCard';
import { useParams, Link } from 'react-router-dom';

function SubjectsPage() {
  const { semesterId } = useParams();
  const selectedSemesterId = Number(semesterId);

  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/semesters')
      .then((response) => response.json())
      .then((data) => {
        setSemesters(data);
      });

    fetch('http://localhost:8080/api/subjects')
      .then((response) => response.json())
      .then((data) => {
        setSubjects(data);
      });
  }, []);

  const selectedSemester = semesters.find(
    (semester) => semester.id === selectedSemesterId
  );
  const filteredSubjects = subjects.filter(
    (subject) => subject.semesterId === selectedSemesterId
  );
  return (
    <main className="subjects-page">
      <header className="page-header">
        <Link to="/semesters" className="back-link">
          ⬅️ Retour aux semestres
        </Link>
        <h1>
          {selectedSemester ? selectedSemester.name : 'Semestre introuvable'}
        </h1>
        <p>Liste des matières disponibles pour ce semestre</p>
      </header>

      {filteredSubjects.length > 0 ? (
        <section className="subjects-grid">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </section>
      ) : (
        <p className="empty-message">
          Aucune matière disponible pour ce semestre
        </p>
      )}
    </main>
  );
}

export default SubjectsPage;
