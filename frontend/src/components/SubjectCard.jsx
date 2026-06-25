import { Link } from 'react-router-dom';
function SubjectCard({ subject }) {
  return (
    <>
      <Link to={`/subjects/${subject.id}`} className="subject-card">
        <h2>{subject.name}</h2>
      </Link>
    </>
  );
}

export default SubjectCard;
