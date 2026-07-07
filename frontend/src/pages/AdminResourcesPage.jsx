import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResources, deleteResource } from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { resourceTypes } from '../constants/resourceTypes';
import { resourceFormats } from '../constants/resourceFormats';

function AdminResourcesPage() {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');

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

  const filteredResources = resources.filter((resource) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      resource.title?.toLowerCase().includes(search) ||
      resource.description?.toLowerCase().includes(search) ||
      resource.type?.toLowerCase().includes(search) ||
      resource.format?.toLowerCase().includes(search) ||
      resource.fileName?.toLowerCase().includes(search);

    const matchesType = selectedType === '' || resource.type === selectedType;

    const matchesFormat =
      selectedFormat === '' || resource.format === selectedFormat;

    return matchesSearch && matchesType && matchesFormat;
  });

  return (
    <main className="admin-page">
      <header className="page-header page-header-row">
        <div>
          <h1>Gestion des ressources</h1>
          <p>
            Ajoute, modifie et organise les fichiers disponibles sur ZDrive.
          </p>
        </div>

        <div className="page-actions">
          <Link to="/admin" className="button button-secondary">
            Retour admin
          </Link>

          <Link to="/admin/resources/new" className="button">
            Ajouter une ressource
          </Link>
        </div>
      </header>

      {error && <p className="empty-message message-error">{error}</p>}

      {loading && (
        <p className="empty-message message-info">
          Chargement des ressources...
        </p>
      )}

      {submitMessage && (
        <p className="empty-message message-success">{submitMessage}</p>
      )}

      {!error && !loading && (
        <div className="admin-toolbar">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Rechercher une ressource..."
            className="search-input"
          />

          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            className="search-input"
          >
            <option value="">Tous les types</option>

            {resourceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            value={selectedFormat}
            onChange={(event) => setSelectedFormat(event.target.value)}
            className="search-input"
          >
            <option value="">Tous les formats</option>

            {resourceFormats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>

          <span>
            {filteredResources.length} résultat
            {filteredResources.length > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {!error && !loading && filteredResources.length > 0 && (
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
              {filteredResources.map((resource) => (
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

      {!error && !loading && filteredResources.length === 0 && (
        <p className="empty-message">
          Aucune ressource ne correspond à ta recherche.
        </p>
      )}
    </main>
  );
}

export default AdminResourcesPage;
