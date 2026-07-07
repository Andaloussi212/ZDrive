import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getResources, updateResource, uploadFile } from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { resourceTypes } from '../constants/resourceTypes';
import { resourceFormats } from '../constants/resourceFormats';

function AdminEditResourcePage() {
  const { resourceId } = useParams();
  const selectedResourceId = Number(resourceId);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    format: '',
    fileName: '',
    fileUrl: '',
    subjectId: '',
    file: null,
  });

  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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
          fileName: resourceToEdit.fileName || '',
          fileUrl: resourceToEdit.fileUrl || '',
          subjectId: resourceToEdit.subjectId,
          file: null,
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

  function getFileFormat(fileName) {
    const extension = fileName.split('.').pop().toUpperCase();

    if (extension === 'PDF') {
      return 'PDF';
    }

    if (extension === 'PNG') {
      return 'PNG';
    }

    if (extension === 'JPG' || extension === 'JPEG') {
      return 'JPG';
    }

    if (extension === 'DOCX') {
      return 'DOCX';
    }

    return 'OTHER';
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    const detectedFormat = getFileFormat(selectedFile.name);

    setFormData({
      ...formData,
      file: selectedFile,
      fileName: selectedFile.name,
      format: detectedFormat,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitMessage('');

    if (formData.title.trim() === '') {
      setSubmitMessage('Le titre de la ressource est obligatoire');
      return;
    }

    if (formData.type.trim() === '') {
      setSubmitMessage('Le type de la ressource est obligatoire');
      return;
    }

    if (formData.format.trim() === '') {
      setSubmitMessage('Le format de la ressource est obligatoire');
      return;
    }

    if (formData.subjectId === '') {
      setSubmitMessage('La matière est obligatoire');
      return;
    }

    setSubmitting(true);

    try {
      let uploadedFileUrl = formData.fileUrl;

      if (formData.file) {
        uploadedFileUrl = await uploadFile(formData.file);
      }

      const resourceData = {
        title: formData.title,
        description: formData.description,
        type: formData.type,
        format: formData.format,
        fileName: formData.fileName,
        fileUrl: uploadedFileUrl,
        subjectId: formData.subjectId,
      };

      const message = await updateResource(selectedResourceId, resourceData);

      if (message !== 'Ressource modifiée') {
        setSubmitMessage(message);
        return;
      }

      setSubmitMessage('');
      navigate('/admin/resources');
    } catch (error) {
      setSubmitMessage(
        "Impossible de modifier la ressource. Vérifie que le backend est lancé et que l'upload fonctionne."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-page">
      <header className="page-header page-header-row">
        <div>
          <h1>Modifier une ressource</h1>
          <p>Modification de la ressource numéro {resourceId}.</p>
        </div>

        <Link to="/admin/resources" className="button button-secondary">
          Retour aux ressources
        </Link>
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
              <select
                id="format"
                value={formData.format}
                onChange={handleChange}
              >
                {resourceFormats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="file">Remplacer le fichier</label>
              <input type="file" id="file" onChange={handleFileChange} />

              {formData.fileName && (
                <p className="empty-message">
                  Fichier actuel : {formData.fileName}
                </p>
              )}

              {formData.format && (
                <p className="empty-message">Format : {formData.format}</p>
              )}
            </div>

            {submitting && (
              <p className="empty-message message-info">
                Enregistrement en cours...
              </p>
            )}

            {submitMessage && (
              <p className="empty-message message-error">{submitMessage}</p>
            )}

            <Button
              text={
                submitting
                  ? 'Enregistrement...'
                  : 'Enregistrer les modifications'
              }
              type="submit"
              disabled={submitting}
            />
          </form>
        </section>
      )}
    </main>
  );
}

export default AdminEditResourcePage;
