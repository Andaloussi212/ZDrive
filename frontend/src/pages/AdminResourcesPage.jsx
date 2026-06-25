import { resources } from '../data/mockData';
import Button from '../components/Button';

function AdminResourcesPage() {
  return (
    <main className="admin-page">
      <header className="page-header">
        <h1>Gestion des ressources</h1>
        <p>Liste des ressources ajoutées sur ZDrive.</p>
      </header>

      <section className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Type</th>
              <th>Format</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.title}</td>
                <td>{resource.type}</td>
                <td>{resource.format}</td>
                <td className="admin-table-actions">
                  <Button text="Modifier" />
                  <Button text="Supprimer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default AdminResourcesPage;
