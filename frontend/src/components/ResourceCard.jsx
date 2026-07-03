import Button from './Button';
function ResourceCard({ resource }) {
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
        <Button text="Consulter" />
        <Button text="Télécharger" />
      </div>
    </article>
  );
}

export default ResourceCard;
