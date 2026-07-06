import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ZDrive
      </Link>

      <div className="navbar-links">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/semesters">Semestres</NavLink>
        <NavLink to="/admin">Admin</NavLink>

        <Button text="Déconnexion" variant="secondary" />
      </div>
    </nav>
  );
}

export default Navbar;
