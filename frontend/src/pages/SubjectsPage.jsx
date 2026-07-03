import { useEffect, useState } from 'react';
import SubjectCard from '../components/SubjectCard';
import { useParams, Link } from 'react-router-dom';
import { getSemesters, getSubjects } from '../services/Api';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function SubjectsPage() {
  const { semesterId } = useParams();
  const selectedSemesterId = Number(semesterId);

  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([getSemesters(), getSubjects(selectedSemesterId)])
      .then(([semestersData, subjectsData]) => {
        setSemesters(semestersData);
        setSubjects(subjectsData);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.subjects);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedSemesterId]);

  const selectedSemester = semesters.find(
    (semester) => semester.id === selectedSemesterId
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

      {error && <p className="empty-message">{error}</p>}

      {loading && <p className="empty-message">Chargement des matières...</p>}

      {!error && !loading && subjects.length > 0 && (
        <section className="subjects-grid">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </section>
      )}

      {!error && !loading && subjects.length === 0 && (
        <p className="empty-message">
          Aucune matière disponible pour ce semestre.
        </p>
      )}
    </main>
  );
}

export default SubjectsPage;
