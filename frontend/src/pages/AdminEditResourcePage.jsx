import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResources, updateResource } from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { resourceTypes } from '../constants/resourceTypes';

function AdminEditResourcePage() {
  const { resourceId } = useParams();
  const selectedResourceId = Number(resourceId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    format: '',
    subjectId: '',
  });

  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getResources()
      .then((data) => {
        const resourceToEdit = data.find(
          (resource) => resource.id === Number(resourceId)
        );

        if (!resourceToEdit) {
          setError(ERROR_MESSAGES.resourceNotFound);
          return;
        }

        setFormData({
          title: resourceToEdit.title,
          description: resourceToEdit.description || '',
          type: resourceToEdit.type,
          format: resourceToEdit.format,
          subjectId: resourceToEdit.subjectId,
        });
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.editResource);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [resourceId]);

  function handleChange(event) {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const resourceData = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      format: formData.format,
      subjectId: formData.subjectId,
    };

    updateResource(selectedResourceId, resourceData).then((message) => {
      if (message !== 'Ressource modifiée') {
        setSubmitMessage(message);
        return;
      }

      setSubmitMessage('');
      navigate('/admin/resources');
    });
  }

  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Modifier une ressource</h1>
        <p>Modification de la ressource numéro {resourceId}.</p>
      </header>

      {error && <p className="empty-message">{error}</p>}

      {loading && (
        <p className="empty-message">Chargement de la ressource...</p>
      )}

      {!error && !loading && (
        <section className="admin-form-card">
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="type">Type de ressource</label>
              <select id="type" value={formData.type} onChange={handleChange}>
                {resourceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="format">Format</label>
              <input
                type="text"
                id="format"
                value={formData.format}
                onChange={handleChange}
              />
            </div>

            {submitMessage && <p className="empty-message">{submitMessage}</p>}

            <Button text="Enregistrer les modifications" type="submit" />
          </form>
        </section>
      )}
    </main>
  );
}

export default AdminEditResourcePage;
