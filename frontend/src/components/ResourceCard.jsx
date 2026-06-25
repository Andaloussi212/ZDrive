function ResourceCard({ resource }) {
  return (
    <>
      <article className="resource-card">
        <h2>{resource.title}</h2>
        <p>{resource.type}</p>
        <p>{resource.format}</p>
      </article>
    </>
  );
}

export default ResourceCard;
