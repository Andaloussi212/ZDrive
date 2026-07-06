const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

function ResourceCard({ resource }) {
  const fileUrl = resource.fileUrl
    ? `${BACKEND_BASE_URL}${resource.fileUrl}`
    : '';

  const downloadUrl = resource.fileName
    ? `${BACKEND_BASE_URL}/api/files/download/${resource.fileName}`
    : '';

  return (
    <article className="resource-card">
      <div>
        <span className="card-label">Ressource</span>

        <h2>{resource.title}</h2>

        {resource.description ? (
          <p>{resource.description}</p>
        ) : (
          <p>Aucune description disponible.</p>
        )}
      </div>

      <div className="resource-meta">
        <span className="resource-badge">{resource.type}</span>
        <span className="resource-badge">{resource.format}</span>
        <span className="resource-badge">
          {resource.fileName || 'Aucun fichier'}
        </span>
      </div>

      <div className="resource-actions">
        {resource.fileUrl ? (
          <>
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Consulter
            </a>

            <a href={downloadUrl} className="button">
              Télécharger
            </a>
          </>
        ) : (
          <p className="empty-message">Aucun fichier disponible</p>
        )}
      </div>
    </article>
  );
}

export default ResourceCard;
