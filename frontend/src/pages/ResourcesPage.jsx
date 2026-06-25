import { resources } from '../data/mockData';
import ResourceCard from '../components/ResourceCard';

function ResourcesPage() {
  const SelectedSubjectId = 1;
  const filteredResources = resources.filter(
    (resource) => resource.subjectId === SelectedSubjectId
  );
  return (
    <>
      <main className="resources-page">
        <header className="page-header">
          <h1>Ressources</h1>
          <p>Liste des fichiers disponibless pour cette matière</p>
        </header>

        <section className="resources-grid">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      </main>
    </>
  );
}

export default ResourcesPage;
