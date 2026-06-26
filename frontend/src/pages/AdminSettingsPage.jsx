function AdminSettingsPage() {
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Paramètres</h1>
        <p>Configuration générale de la plateforme ZDrive.</p>
      </header>

      <section className="admin-form-card">
        <form className="admin-form">
          <div className="form-group">
            <label htmlFor="studentPassword">
              Mot de passe étudiant global
            </label>
            <input
              type="password"
              id="studentPassword"
              placeholder="Nouveau mot de passe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="allowedTypes">Types de fichiers autorisés</label>
            <input
              type="text"
              id="allowedTypes"
              value="PDF, PNG, JPG"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="maxUploadSize">Taille maximale d’upload</label>
            <input type="text" id="maxUploadSize" value="20 Mo" readOnly />
          </div>
        </form>
      </section>
    </main>
  );
}

export default AdminSettingsPage;
