import Button from '../components/Button';
import { semesters, subjects } from '../data/mockData';

function AdminNewResourcePage() {
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Ajouter une ressource</h1>
        <p>Formulaire d'ajout d'un nouveau fichier sur ZDrive</p>
      </header>

      <section className="admin-form-card">
        <form className="admin-form">
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              placeholder="Ex : Fiche de révision Java"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="courte description de la ressource"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semestre</label>
            <select id="semester">
              {semesters.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Matière</label>
            <select id="subject">
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type de ressource</label>
            <select id="type">
              <option>COURS</option>
              <option>TD</option>
              <option>TP</option>
              <option>FICHE</option>
              <option>EXAM</option>
              <option>OTHER</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="file">Fichier</label>
            <input type="file" id="file" />
          </div>

          <Button text="Ajouter la ressource" />
        </form>
      </section>
    </main>
  );
}

export default AdminNewResourcePage;
