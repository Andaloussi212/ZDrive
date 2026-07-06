import { Link } from 'react-router-dom';

function SubjectCard({ subject }) {
  return (
    <article className="subject-card">
      <div>
        <span className="card-label">Matière</span>
        <h2>{subject.name}</h2>

        <p>Accède aux ressources associées à cette matière.</p>
      </div>

      <div className="card-footer">
        <span>Ressources</span>

        <Link to={`/subjects/${subject.id}`} className="card-link">
          Voir les fichiers →
        </Link>
      </div>
    </article>
  );
}

export default SubjectCard;
