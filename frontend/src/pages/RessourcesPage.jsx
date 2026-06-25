import { ressources } from '../data/mockData';

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
            <article className="ressources-card" key={ressource.id}>
              <h2>{ressource.title}</h2>
              <p>{ressource.type}</p>
              <p>{ressource.format}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default RessourcesPage;
