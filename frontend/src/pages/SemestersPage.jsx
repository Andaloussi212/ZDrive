import { useEffect, useState } from 'react';
import SemesterCard from '../components/SemesterCard';
import { getSemesters } from '../services/Api';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function SemestersPage() {
  const [semesters, setSemesters] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getSemesters()
      .then((data) => {
        setSemesters(data);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.semesters);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main className="semesters-page">
      <header className="page-header">
        <h1>Semestres</h1>
        <p>
          Choisis un semestre pour consulter les matières et les ressources
          associées.
        </p>
      </header>

      {error && <p className="empty-message">{error}</p>}

      {loading && <p className="empty-message">Chargement des semestres...</p>}

      {!error && !loading && (
        <section className="semesters-grid">
          {semesters.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </section>
      )}
    </main>
  );
}

export default SemestersPage;
