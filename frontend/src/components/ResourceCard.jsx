import Button from './Button';
function ResourceCard({ resource }) {
  return (
    <>
      <article className="resource-card">
        <h2>{resource.title}</h2>
        <p>{resource.type}</p>
        <p>{resource.format}</p>
        <div className="resource-actions">
          <Button text="Consulter" />
          <Button text="Télécharger" />
        </div>
      </article>
    </>
  );
}

export default ResourceCard;
