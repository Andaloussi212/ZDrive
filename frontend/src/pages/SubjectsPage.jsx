import { subjects } from '../data/mockData';

function SubjectsPage() {
  const selectedSemesterId = 1;
  const filteredSubjects = subjects.filter(
    (subject) => subject.semesterId == selectedSemesterId
  );
  return (
    <>
      <main className="subjects-page">
        <header className="page-header">
          <h1>Matière</h1>
          <p>Liste des matières disponible pour ce semestre</p>
        </header>

        <section className="subjects-grid">
          {filteredSubjects.map((subject) => (
            <article className="subjects-card" key={subject.id}>
              <h2>{subject.name}</h2>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default SubjectsPage;
