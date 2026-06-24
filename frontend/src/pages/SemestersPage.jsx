import { semesters } from '../data/mockData';

function SemestersPage() {
  return (
    <>
      <main className="semesters-page">
        <header className="page-header">
          <h1>Semestre</h1>
          <p>
            Choisit un semestre pour consulter les matières et les ressources
            associés
          </p>
        </header>

        <section className="semesters-grid">
          {semesters.map((semester) => (
            <article className="semesters-card" key={semester.id}>
              <h2>{semester.name}</h2>
              <p>{semester.year}</p>
              <p>{semester.description}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default SemestersPage;
