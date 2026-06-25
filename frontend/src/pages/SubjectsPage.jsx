import { subjects, semesters } from '../data/mockData';
import SubjectCard from '../components/SubjectCard';
import { useParams } from 'react-router-dom';

function SubjectsPage() {
  const { semesterId } = useParams();
  const selectedSemesterId = Number(semesterId);
  const selectedSemester = semesters.find(
    (semester) => semester.id === selectedSemesterId
  );
  const filteredSubjects = subjects.filter(
    (subject) => subject.semesterId === selectedSemesterId
  );
  return (
    <>
      <main className="subjects-page">
        <header className="page-header">
          <h1>
            {selectedSemester ? selectedSemester.name : 'Semestre introuvable'}
          </h1>
          <p>Liste des matières disponibles pour ce semestre</p>
        </header>

        <section className="subjects-grid">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </section>
      </main>
    </>
  );
}

export default SubjectsPage;
