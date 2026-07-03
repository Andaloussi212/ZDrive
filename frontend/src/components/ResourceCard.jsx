function ResourceCard({ resource }) {
  const fileUrl = resource.fileUrl
    ? `http://localhost:8080${resource.fileUrl}`
    : '';

  return (
    <article className="resource-card">
      <h2>{resource.title}</h2>

      {resource.description && <p>{resource.description}</p>}

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

            <a
              href={`http://localhost:8080/api/files/download/${resource.fileName}`}
              className="button"
            >
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
