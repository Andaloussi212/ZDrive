import { Link } from 'react-router-dom';
import { semesters, subjects, resources } from '../data/mockData';

function AdminDashboardPage() {
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Dashboard administrateur</h1>
        <p>Résumé de la plateforme ZDrive</p>
      </header>

      <section className="admin-stats">
        <article className="admin-stat-card">
          <span>Semestres</span>
          <strong>{semesters.length}</strong>
        </article>

        <article className="admin-stat-card">
          <span>Matières</span>
          <strong>{subjects.length}</strong>
        </article>

        <article className="admin-stat-card">
          <span>Ressources</span>
          <strong>{resources.length}</strong>
        </article>
      </section>

      <section className="admin-actions">
        <Link to="/admin/resources">Gérer les ressources</Link>
        <Link to="/admin/resources/new">Ajouter une ressource</Link>
        <Link to="/admin/settings">Paramètres</Link>
      </section>
    </main>
  );
}

export default AdminDashboardPage;
