import Button from './Button';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">ZDrive</div>
        <div className="navbar-links">
          <Link to="/">Accueil</Link>
          <Link to="/semesters">Semestres</Link>
          <Link to="/admin">Admin</Link>
          <Button text="Déconnexion" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
