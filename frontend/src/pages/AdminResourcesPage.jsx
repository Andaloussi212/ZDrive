import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResources, deleteResource } from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function AdminResourcesPage() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);

  function handleDelete(id) {
    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer cette ressource ?'
    );

    if (!confirmed) {
      return;
    }

    deleteResource(id).then((message) => {
      setSubmitMessage(message);

      getResources().then((data) => {
        setResources(data);
      });
    });
  }

  useEffect(() => {
    setLoading(true);

    getResources()
      .then((data) => {
        setResources(data);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.resources);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Gestion des ressources</h1>
        <p>Liste des ressources ajoutées sur ZDrive.</p>
      </header>

      {error && <p className="empty-message">{error}</p>}

      {loading && <p className="empty-message">Chargement des ressources...</p>}

      {submitMessage && <p className="empty-message">{submitMessage}</p>}

      {!error && !loading && (
        <section className="admin-table-card">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Type</th>
                <th>Format</th>
                <th>Fichier</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {resources.map((resource) => (
                <tr key={resource.id}>
                  <td>{resource.title}</td>
                  <td>{resource.description || '—'}</td>
                  <td>{resource.type}</td>
                  <td>{resource.format}</td>
                  <td>{resource.fileName || '—'}</td>
                  <td className="admin-table-actions">
                    <Link
                      to={`/admin/resources/${resource.id}/edit`}
                      className="button button-secondary"
                    >
                      Modifier
                    </Link>
                    <Button
                      text="Supprimer"
                      variant="danger"
                      onClick={() => handleDelete(resource.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}

export default AdminResourcesPage;
