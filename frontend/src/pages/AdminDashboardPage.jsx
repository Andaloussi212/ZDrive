import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSemesters, getSubjects, getResources } from '../services/Api';

function AdminDashboardPage() {
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getSemesters().then((data) => {
      setSemesters(data);
    });

    getSubjects().then((data) => {
      setSubjects(data);
    });

    getResources().then((data) => {
      setResources(data);
    });
  }, []);
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
