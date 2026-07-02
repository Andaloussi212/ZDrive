import { useEffect, useState } from 'react';
import SemesterCard from '../components/SemesterCard';
import { getSemesters } from '../services/Api';

function SemestersPage() {
  const [semesters, setSemesters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getSemesters()
      .then((data) => {
        setSemesters(data);
        setError('');
      })
      .catch(() => {
        setError(
          'Impossible de charger les semestres. Vérifie que le backend est lancé.'
        );
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

      {!error && (
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
