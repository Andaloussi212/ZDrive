import SemesterCard from '../components/SemesterCard';
import { useEffect, useState } from 'react';

function SemestersPage() {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/semesters')
      .then((response) => response.json())
      .then((data) => {
        setSemesters(data);
      });
  }, []);
  return (
    <main className="semesters-page">
      <header className="page-header">
        <h1>Semestres</h1>
        <p>
          Choisis un semestre pour consulter les matières et les ressources
          associées
        </p>
      </header>

      <section className="semesters-grid">
        {semesters.map((semester) => (
          <SemesterCard key={semester.id} semester={semester} />
        ))}
      </section>
    </main>
  );
}

export default SemestersPage;
