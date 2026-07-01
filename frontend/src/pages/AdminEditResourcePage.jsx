import { useParams } from 'react-router-dom';

function AdminEditResourcePage() {
  const { resourceId } = useParams();

  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Modifier une ressource</h1>
        <p>Modification de la ressource numéro {resourceId}.</p>
      </header>

      <section className="admin-form-card">
        <p>Formulaire de modification à venir.</p>
      </section>
    </main>
  );
}

export default AdminEditResourcePage;
