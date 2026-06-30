import { useEffect, useState } from 'react';
import { getResources, deleteResource } from '../services/Api';
import Button from '../components/Button';

function AdminResourcesPage() {
  const [resources, setResources] = useState([]);

  function handleDelete(id) {
    deleteResource(id).then((message) => {
      alert(message);

      getResources().then((data) => {
        setResources(data);
      });
    });
  }

  useEffect(() => {
    getResources().then((data) => {
      setResources(data);
    });
  }, []);
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
                  <Button text="Modifier" variant="secondary" />
                  <Button
                    text="Supprimer"
                    variant="danger"
                    onClick={() => handleDelete(resource.id)}
                  />
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
