import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResources, updateResource } from '../services/Api';
import Button from '../components/Button';

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

  useEffect(() => {
    getResources()
      .then((data) => {
        const selectedResource = data.find(
          (resource) => resource.id === selectedResourceId
        );

        if (selectedResource) {
          setFormData({
            title: selectedResource.title,
            description: selectedResource.description || '',
            type: selectedResource.type,
            format: selectedResource.format,
            subjectId: selectedResource.subjectId,
          });
          setError('');
        } else {
          setError('Ressource introuvable.');
        }
      })
      .catch(() => {
        setError(
          'Impossible de charger la ressource. Vérifie que le backend est lancé.'
        );
      });
  }, [selectedResourceId]);

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
      alert(message);
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

      {!error && (
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
              <label htmlFor="type">Type</label>
              <input
                type="text"
                id="type"
                value={formData.type}
                onChange={handleChange}
              />
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

            <Button text="Enregistrer les modifications" type="submit" />
          </form>
        </section>
      )}
    </main>
  );
}

export default AdminEditResourcePage;
