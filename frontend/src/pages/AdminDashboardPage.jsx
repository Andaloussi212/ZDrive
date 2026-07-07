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
            <Link to="/admin/resources" className="admin-action-card">
              <span>Ressources</span>
              <strong>Gérer les fichiers →</strong>
              <p>Modifier, supprimer ou consulter les ressources existantes.</p>
            </Link>

            <Link to="/admin/resources/new" className="admin-action-card">
              <span>Ajout</span>
              <strong>Ajouter une ressource →</strong>
              <p>Uploader un nouveau fichier et l’associer à une matière.</p>
            </Link>

            <Link to="/admin/settings" className="admin-action-card">
              <span>Paramètres</span>
              <strong>Configurer ZDrive →</strong>
              <p>Préparer les réglages futurs de la plateforme.</p>
            </Link>

            <Link to="/admin/semesters" className="admin-action-card">
              <span>Semestres</span>
              <strong>Gérer les semestres →</strong>
              <p>
                Ajouter, modifier ou supprimer les semestres de la plateforme.
              </p>
            </Link>

            <Link to="/admin/subjects" className="admin-action-card">
              <span>Matières</span>
              <strong>Gérer les matières →</strong>
              <p>
                Ajouter, modifier ou supprimer les matières associées aux
                semestres.
              </p>
            </Link>
          </section>
        </>
      )}
    </main>
  );
}

export default AdminDashboardPage;
