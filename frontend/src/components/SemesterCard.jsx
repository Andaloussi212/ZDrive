import { Link } from 'react-router-dom';
function SemesterCard({ semester }) {
  return (
    <Link to={`/semesters/${semester.id}`} className="semester-card">
      <h2>{semester.name}</h2>
      <p>{semester.year}</p>
      <p>{semester.description}</p>
    </Link>
  );
}

export default SemesterCard;
