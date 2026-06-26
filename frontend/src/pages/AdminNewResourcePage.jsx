import Button from '../components/Button';
import { semesters, subjects, resourceTypes } from '../data/mockData';
import { useState } from 'react';

function AdminNewResourcePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    semesterId: semesters[0]?.id || '',
    subjectId: subjects[0]?.id || '',
    type: 'COURS',
    file: null,
  });

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

  function handleFileChange(event) {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.title.trim() === '') {
      alert('Le titre est obligatoire');
      return;
    }

    console.log('Nouvelle ressource : ', formData);
  }
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Ajouter une ressource</h1>
        <p>Formulaire d'ajout d'un nouveau fichier sur ZDrive</p>
      </header>

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
          </div>

          <Button text="Ajouter la ressource" type="submit" />
        </form>
      </section>
    </main>
  );
}

export default AdminNewResourcePage;
