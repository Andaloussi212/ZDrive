import { useEffect, useState } from 'react';
import {
  getSemesters,
  createSemester,
  updateSemester,
  deleteSemester,
} from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function AdminSemestersPage() {
  const [semesters, setSemesters] = useState([]);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingSemesterId, setEditingSemesterId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    year: '',
    description: '',
  });

  function loadSemesters() {
    setLoading(true);

    getSemesters()
      .then((data) => {
        setSemesters(data);
        setError('');
      })
      .catch(() => {
        setError(ERROR_MESSAGES.semesters);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadSemesters();
  }, []);

  function handleChange(event) {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function resetForm() {
    setFormData({
      name: '',
      year: '',
      description: '',
    });

    setEditingSemesterId(null);
  }

  function handleEdit(semester) {
    setEditingSemesterId(semester.id);

    setFormData({
      name: semester.name,
      year: semester.year,
      description: semester.description || '',
    });

    setSubmitMessage('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitMessage('');

    const semesterData = {
      name: formData.name,
      year: formData.year,
      description: formData.description,
    };

    try {
      const message = editingSemesterId
        ? await updateSemester(editingSemesterId, semesterData)
        : await createSemester(semesterData);

      setSubmitMessage(message);
      resetForm();
      loadSemesters();
    } catch (error) {
      setSubmitMessage("Impossible d'enregistrer le semestre.");
    }
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer ce semestre ?'
    );

    if (!confirmed) {
      return;
    }

    deleteSemester(id).then((message) => {
      setSubmitMessage(message);
      loadSemesters();
    });
  }

  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Gestion des semestres</h1>
        <p>Ajoute, modifie ou supprime les semestres disponibles sur ZDrive.</p>
      </header>

      {error && <p className="empty-message message-error">{error}</p>}

      {loading && (
        <p className="empty-message message-info">
          Chargement des semestres...
        </p>
      )}

      {!error && !loading && (
        <>
          <section className="admin-form-card">
            <div className="form-card-header">
              <span>{editingSemesterId ? 'Modification' : 'Nouveau'}</span>
              <h2>
                {editingSemesterId
                  ? 'Modifier le semestre'
                  : 'Ajouter un semestre'}
              </h2>
              <p>
                Renseigne le nom, l’année et une courte description du semestre.
              </p>
            </div>

            <form className="admin-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex : Semestre 1"
                />
              </div>

              <div className="form-group">
                <label htmlFor="year">Année</label>
                <input
                  type="text"
                  id="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Ex : 2025-2026"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Courte description du semestre"
                ></textarea>
              </div>

              {submitMessage && (
                <p className="empty-message message-success">{submitMessage}</p>
              )}

              <Button
                text={
                  editingSemesterId
                    ? 'Enregistrer les modifications'
                    : 'Ajouter le semestre'
                }
                type="submit"
              />

              {editingSemesterId && (
                <Button
                  text="Annuler la modification"
                  variant="secondary"
                  onClick={resetForm}
                />
              )}
            </form>
          </section>

          <section className="admin-table-card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Année</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {semesters.map((semester) => (
                  <tr key={semester.id}>
                    <td>{semester.name}</td>
                    <td>{semester.year}</td>
                    <td>{semester.description || '—'}</td>
                    <td className="admin-table-actions">
                      <Button
                        text="Modifier"
                        variant="secondary"
                        onClick={() => handleEdit(semester)}
                      />

                      <Button
                        text="Supprimer"
                        variant="danger"
                        onClick={() => handleDelete(semester.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}
    </main>
  );
}

export default AdminSemestersPage;
