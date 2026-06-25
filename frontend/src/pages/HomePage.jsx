import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-card">
        <h1>Bienvenue sur ZDrive</h1>

        <p>
          Plateforme privée de ressources étudiantes pour consulter, organiser
          et télécharger des documents de cours.
        </p>

        <Link to="/semesters">Accéder aux semestres</Link>
      </section>
    </main>
  );
}

export default HomePage;
