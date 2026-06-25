function SemestersCard({ semester }) {
  return (
    <>
      <article className="semesters-card">
        <h2>{semester.name}</h2>
        <p>{semester.year}</p>
        <p>{semester.description}</p>
      </article>
    </>
  );
}

export default SemestersCard;
