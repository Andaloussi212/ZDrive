import Button from '../components/Button';

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
              <option>Semestre 1</option>
              <option>Semestre 2</option>
              <option>Semestre 3</option>
              <option>Semestre 4</option>
              <option>Semestre 5</option>
              <option>Semestre 6</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Matière</label>
            <select id="subject">
              <option>Bases de la programmation</option>
              <option>Conception Objet</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type de ressource</label>
            <select id="type">
              <option>COURSE</option>
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
