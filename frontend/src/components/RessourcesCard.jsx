function RessourcesCard({ ressource }) {
  return (
    <>
      <article className="ressources-card">
        <h2>{ressource.title}</h2>
        <p>{ressource.type}</p>
        <p>{ressource.format}</p>
      </article>
    </>
  );
}

export default RessourcesCard;
