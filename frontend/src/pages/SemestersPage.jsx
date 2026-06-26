import { semesters } from '../data/mockData';
import SemesterCard from '../components/SemesterCard';

function SemestersPage() {
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
