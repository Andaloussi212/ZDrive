import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_AUTH_KEY } from '../constants/adminAuth';
import Button from './Button';

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    navigate('/login');
  }
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

        <Button text="Déconnexion" variant="secondary" onClick={handleLogout} />
      </div>
    </nav>
  );
}

export default Navbar;
