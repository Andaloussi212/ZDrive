import { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { useParams, Link } from 'react-router-dom';
import { getSubjects, getResources } from '../services/Api';

function ResourcesPage() {
  const { subjectId } = useParams();
  const selectedSubjectId = Number(subjectId);

  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getSubjects().then((data) => {
      setSubjects(data);
    });

    getResources().then((data) => {
      setResources(data);
    });
  }, []);

  const selectedSubject = subjects.find(
    (subject) => subject.id === selectedSubjectId
  );
  const filteredResources = resources.filter(
    (resource) => resource.subjectId === selectedSubjectId
  );
  return (
    <main className="resources-page">
      <header className="page-header">
        <Link
          to={
            selectedSubject
              ? `/semesters/${selectedSubject.semesterId}`
              : '/semesters'
          }
          className="back-link"
        >
          ⬅️ Retour aux matières
        </Link>
        <h1>
          {selectedSubject ? selectedSubject.name : 'Matière introuvable'}
        </h1>
        <p>Liste des fichiers disponibles pour cette matière</p>
      </header>
      {filteredResources.length > 0 ? (
        <section className="resources-grid">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      ) : (
        <p className="empty-message">
          Aucune ressource disponible pour cette matière.
        </p>
      )}
    </main>
  );
}

export default ResourcesPage;
