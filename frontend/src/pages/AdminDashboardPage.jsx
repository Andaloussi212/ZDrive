import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSemesters, getSubjects, getResources } from '../services/Api';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function AdminDashboardPage() {
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([getSemesters(), getSubjects(), getResources()])
      .then(([semestersData, subjectsData, resourcesData]) => {
        setSemesters(semestersData);
        setSubjects(subjectsData);
        setResources(resourcesData);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.dashboard);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Dashboard administrateur</h1>
        <p>Résumé de la plateforme ZDrive</p>
      </header>

      {error && <p className="empty-message">{error}</p>}

      {loading && (
        <p className="empty-message">Chargement du tableau de bord...</p>
      )}

      {!error && !loading && (
        <>
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
        </>
      )}
    </main>
  );
}

export default AdminDashboardPage;
