function SemesterCard({ semester }) {
  return (
    <>
      <article className="semester-card">
        <h2>{semester.name}</h2>
        <p>{semester.year}</p>
        <p>{semester.description}</p>
      </article>
    </>
  );
}

export default SemesterCard;
