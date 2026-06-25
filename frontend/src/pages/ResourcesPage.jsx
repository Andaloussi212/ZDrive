import { resources, subjects } from '../data/mockData';
import ResourceCard from '../components/ResourceCard';
import { useParams } from 'react-router-dom';

function ResourcesPage() {
  const { subjectId } = useParams();
  const selectedSubjectId = Number(subjectId);
  const selectedSubject = subjects.find(
    (subject) => subject.id === selectedSubjectId
  );
  const filteredResources = resources.filter(
    (resource) => resource.subjectId === selectedSubjectId
  );
  return (
    <>
      <main className="resources-page">
        <header className="page-header">
          <h1>
            {selectedSubject ? selectedSubject.name : 'Matière Introuvable'}
          </h1>
          <p>Liste des fichiers disponibless pour cette matière</p>
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
    </>
  );
}

export default ResourcesPage;
