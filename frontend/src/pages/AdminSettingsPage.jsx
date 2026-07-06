function AdminSettingsPage() {
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Paramètres</h1>
        <p>
          Prépare la configuration future de ZDrive : accès, sécurité,
          organisation et préférences de la plateforme.
        </p>
      </header>

      <section className="settings-grid">
        <article className="settings-card">
          <span className="card-label">Accès</span>
          <h2>Authentification</h2>
          <p>
            Préparer la gestion des comptes admin et des accès privés aux
            ressources.
          </p>
          <strong>À venir</strong>
        </article>

        <article className="settings-card">
          <span className="card-label">Organisation</span>
          <h2>Semestres & matières</h2>
          <p>
            Ajouter plus tard la gestion complète des semestres et des matières
            depuis l’interface admin.
          </p>
          <strong>À venir</strong>
        </article>

        <article className="settings-card">
          <span className="card-label">Stockage</span>
          <h2>Fichiers uploadés</h2>
          <p>
            Configurer les règles liées aux fichiers, aux formats acceptés et à
            la taille maximale.
          </p>
          <strong>Actif</strong>
        </article>
      </section>
    </main>
  );
}

export default AdminSettingsPage;
