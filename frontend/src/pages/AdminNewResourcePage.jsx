import Button from '../components/Button';
import { resourceTypes } from '../constants/resourceTypes';
import { getSemesters, getSubjects, createResource } from '../services/Api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminNewResourcePage() {
  const navigate = useNavigate();
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    semesterId: '',
    subjectId: '',
    type: 'COURS',
    file: null,
  });

  useEffect(() => {
    getSemesters().then((data) => {
      setSemesters(data);

      if (data.length > 0) {
        setFormData((previousFormData) => ({
          ...previousFormData,
          semesterId: data[0].id,
        }));
      }
    });

    getSubjects().then((data) => {
      setSubjects(data);

      if (data.length > 0) {
        setFormData((previousFormData) => ({
          ...previousFormData,
          subjectId: data[0].id,
        }));
      }
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
    const resourceData = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      subjectId: formData.subjectId,
    };

    createResource(resourceData).then((message) => {
      alert(message);
      navigate('/admin/resources');
    });
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
