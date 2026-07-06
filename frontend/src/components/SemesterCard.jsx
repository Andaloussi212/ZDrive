import { Link } from 'react-router-dom';

function SemesterCard({ semester }) {
  return (
    <article className="semester-card">
      <div>
        <span className="card-label">Semestre</span>
        <h2>{semester.name}</h2>

        {semester.description && <p>{semester.description}</p>}
      </div>

      <div className="card-footer">
        <span>{semester.year}</span>

        <Link to={`/semesters/${semester.id}`} className="card-link">
          Voir les matières →
        </Link>
      </div>
    </article>
  );
}

export default SemesterCard;
