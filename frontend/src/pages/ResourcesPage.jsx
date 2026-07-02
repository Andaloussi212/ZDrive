import { useEffect, useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { useParams, Link } from 'react-router-dom';
import { getSubjects, getResources } from '../services/Api';

function ResourcesPage() {
  const { subjectId } = useParams();
  const selectedSubjectId = Number(subjectId);

  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([getSubjects(), getResources(selectedSubjectId)])
      .then(([subjectsData, resourcesData]) => {
        setSubjects(subjectsData);
        setResources(resourcesData);
        setError('');
      })
      .catch(() => {
        setError(
          'Impossible de charger les ressources. Vérifie que le backend est lancé.'
        );
      });
  }, [selectedSubjectId]);

  const selectedSubject = subjects.find(
    (subject) => subject.id === selectedSubjectId
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

      {error && <p className="empty-message">{error}</p>}

      {!error && resources.length > 0 ? (
        <section className="resources-grid">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      ) : (
        !error && (
          <p className="empty-message">
            Aucune ressource disponible pour cette matière.
          </p>
        )
      )}
    </main>
  );
}

export default ResourcesPage;
