import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ZDrive
      </Link>

      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/semesters">Semestres</Link>
        <Link to="/admin">Admin</Link>

        <Button text="Déconnexion" variant="secondary" />
      </div>
    </nav>
  );
}

export default Navbar;
