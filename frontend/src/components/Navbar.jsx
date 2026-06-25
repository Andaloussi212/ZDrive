import Button from './Button';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">ZDrive</div>
        <div className="navbar-links">
          <Link to="/login">Accueil</Link>
          <Link to="/semesters">Semestres</Link>
          <Link to="/subjects">Matières</Link>
          <Link to="/resources">Ressources</Link>
          <Button text="Déconnexion" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
