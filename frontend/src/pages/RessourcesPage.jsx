import { ressources } from '../data/mockData';
import RessourceCard from '../components/RessourcesCard';
function RessourcesPage() {
  const SelectedSubjectId = 1;
  const filteredRessources = ressources.filter(
    (ressource) => ressource.subjectId === SelectedSubjectId
  );
  return (
    <>
      <main className="ressources-page">
        <header className="page-header">
          <h1>Ressources</h1>
          <p>Liste des fichiers disponible pour cette matière</p>
        </header>

        <section className="ressources-grid">
          {filteredRessources.map((ressource) => (
            <RessourceCard key={ressource.id} ressource={ressource} />
          ))}
        </section>
      </main>
    </>
  );
}

export default RessourcesPage;
