import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Plateforme privée de ressources</div>

          <h1 className="hero-title">
            Centralise tes cours
            <span>Travaille plus vite</span>
          </h1>

          <p className="hero-description">
            ZDrive regroupe les ressources par semestre, matière et type de
            fichier pour retrouver rapidement les cours, fiches, TD, TP et
            examens importants.
          </p>

          <div className="hero-actions">
            <Link to="/semesters" className="button">
              Voir les semestres
            </Link>

            <Link to="/admin" className="button button-secondary">
              Espace admin
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <h2>Organisation ZDrive</h2>

          <ul>
            <li>
              <span>Semestres</span>
              <strong>S1 → S6</strong>
            </li>

            <li>
              <span>Matières</span>
              <strong>Classées</strong>
            </li>

            <li>
              <span>Ressources</span>
              <strong>Cours / TD / TP</strong>
            </li>

            <li>
              <span>Fichiers</span>
              <strong>PDF / Images / Docs</strong>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

export default HomePage;
