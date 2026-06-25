import { subjects } from '../data/mockData';
import SubjectsCard from '../components/SubjectsCard';

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
            <SubjectsCard key={subject.id} subject={subject} />
          ))}
        </section>
      </main>
    </>
  );
}

export default SubjectsPage;
