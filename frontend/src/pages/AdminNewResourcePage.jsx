import Button from '../components/Button';
import { resourceTypes } from '../constants/resourceTypes';
import { getSemesters, getSubjects, createResource } from '../services/Api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function AdminNewResourcePage() {
  const navigate = useNavigate();
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    semesterId: '',
    subjectId: '',
    type: 'COURS',
    format: '',
    file: null,
  });

  useEffect(() => {
    setLoading(true);

    Promise.all([getSemesters(), getSubjects()])
      .then(([semestersData, subjectsData]) => {
        setSemesters(semestersData);
        setSubjects(subjectsData);
        setError('');

        if (semestersData.length > 0) {
          setFormData((previousFormData) => ({
            ...previousFormData,
            semesterId: semestersData[0].id,
          }));
        }

        if (subjectsData.length > 0) {
          setFormData((previousFormData) => ({
            ...previousFormData,
            subjectId: subjectsData[0].id,
          }));
        }
      })
      .catch(() => {
        setError(ERROR_MESSAGES.form);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredSubjects = subjects.filter(
    (subject) => subject.semesterId === Number(formData.semesterId)
  );

  function handleChange(event) {
    const { id, value } = event.target;

    if (id === 'semesterId') {
      const newSemesterId = Number(value);

      const subjectsForSemester = subjects.filter(
        (subject) => subject.semesterId === newSemesterId
      );

      setFormData({
        ...formData,
        semesterId: newSemesterId,
        subjectId: subjectsForSemester[0]?.id || '',
      });

      return;
    }

    if (id === 'subjectId') {
      setFormData({
        ...formData,
        subjectId: Number(value),
      });

      return;
    }

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
      format: detectedFormat,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.title.trim() === '') {
      setSubmitMessage('Le titre est obligatoire');
      return;
    }
    const resourceData = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      format: formData.format,
      fileName: formData.file ? formData.file.name : '',
      fileUrl: formData.file ? `/uploads/${formData.file.name}` : '',
      subjectId: formData.subjectId,
    };

    createResource(resourceData).then((message) => {
      if (message !== 'Ressource ajoutée') {
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
        <h1>Ajouter une ressource</h1>
        <p>Formulaire d'ajout d'un nouveau fichier sur ZDrive</p>
      </header>

      {error && <p className="empty-message">{error}</p>}

      {loading && <p className="empty-message">Chargement du formulaire...</p>}

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
                placeholder="Ex : Fiche de révision Java"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Courte description de la ressource"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="semesterId">Semestre</label>
              <select
                id="semesterId"
                value={formData.semesterId}
                onChange={handleChange}
              >
                {semesters.map((semester) => (
                  <option key={semester.id} value={semester.id}>
                    {semester.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subjectId">Matière</label>
              <select
                id="subjectId"
                value={formData.subjectId}
                onChange={handleChange}
              >
                {filteredSubjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
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
              <label htmlFor="file">Fichier</label>
              <input type="file" id="file" onChange={handleFileChange} />

              {formData.file && (
                <p className="empty-message">
                  Fichier sélectionné : {formData.file.name}
                </p>
              )}

              {formData.format && (
                <p className="empty-message">
                  Format détecté : {formData.format}
                </p>
              )}
            </div>

            {submitMessage && <p className="empty-message">{submitMessage}</p>}

            <Button text="Ajouter la ressource" type="submit" />
          </form>
        </section>
      )}
    </main>
  );
}

export default AdminNewResourcePage;
