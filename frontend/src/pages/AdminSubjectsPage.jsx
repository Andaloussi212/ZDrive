import { useEffect, useState } from 'react';
import {
  getSemesters,
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from '../services/Api';
import Button from '../components/Button';
import { ERROR_MESSAGES } from '../constants/errorMessages';

function AdminSubjectsPage() {
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingSubjectId, setEditingSubjectId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    semesterId: '',
  });

  function loadData() {
    setLoading(true);

    Promise.all([getSemesters(), getSubjects()])
      .then(([semestersData, subjectsData]) => {
        setSemesters(semestersData);
        setSubjects(subjectsData);
        setError('');

        if (semestersData.length > 0 && formData.semesterId === '') {
          setFormData((previousFormData) => ({
            ...previousFormData,
            semesterId: semestersData[0].id,
          }));
        }
      })
      .catch(() => {
        setError(ERROR_MESSAGES.subjects);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleChange(event) {
    const { id, value } = event.target;

    if (id === 'semesterId') {
      setFormData({
        ...formData,
        semesterId: Number(value),
      });

      return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  function resetForm() {
    setFormData({
      name: '',
      semesterId: semesters[0]?.id || '',
    });

    setEditingSubjectId(null);
  }

  function handleEdit(subject) {
    setEditingSubjectId(subject.id);

    setFormData({
      name: subject.name,
      semesterId: subject.semesterId,
    });

    setSubmitMessage('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitMessage('');

    const subjectData = {
      name: formData.name,
      semesterId: formData.semesterId,
    };

    try {
      const message = editingSubjectId
        ? await updateSubject(editingSubjectId, subjectData)
        : await createSubject(subjectData);

      setSubmitMessage(message);
      resetForm();
      loadData();
    } catch (error) {
      setSubmitMessage("Impossible d'enregistrer la matière.");
    }
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer cette matière ?'
    );

    if (!confirmed) {
      return;
    }

    deleteSubject(id).then((message) => {
      setSubmitMessage(message);
      loadData();
    });
  }

  function getSemesterName(semesterId) {
    const semester = semesters.find(
      (semesterItem) => semesterItem.id === semesterId
    );

    return semester ? semester.name : 'Semestre inconnu';
  }

  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Gestion des matières</h1>
        <p>Ajoute, modifie ou supprime les matières associées aux semestres.</p>
      </header>

      {error && <p className="empty-message message-error">{error}</p>}

      {loading && (
        <p className="empty-message message-info">Chargement des matières...</p>
      )}

      {!error && !loading && (
        <>
          <section className="admin-form-card">
            <div className="form-card-header">
              <span>{editingSubjectId ? 'Modification' : 'Nouvelle'}</span>
              <h2>
                {editingSubjectId
                  ? 'Modifier la matière'
                  : 'Ajouter une matière'}
              </h2>
              <p>
                Renseigne le nom de la matière et le semestre auquel elle
                appartient.
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
                  placeholder="Ex : Bases de la programmation"
                />
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

              {submitMessage && (
                <p className="empty-message message-success">{submitMessage}</p>
              )}

              <Button
                text={
                  editingSubjectId
                    ? 'Enregistrer les modifications'
                    : 'Ajouter la matière'
                }
                type="submit"
              />

              {editingSubjectId && (
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
                  <th>Semestre</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id}>
                    <td>{subject.name}</td>
                    <td>{getSemesterName(subject.semesterId)}</td>
                    <td className="admin-table-actions">
                      <Button
                        text="Modifier"
                        variant="secondary"
                        onClick={() => handleEdit(subject)}
                      />

                      <Button
                        text="Supprimer"
                        variant="danger"
                        onClick={() => handleDelete(subject.id)}
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

export default AdminSubjectsPage;
