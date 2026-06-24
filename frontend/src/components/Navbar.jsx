import Button from './Button';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">ZDrive</div>
        <div className="navbar-links">
          <a href="#">Accueil</a>
          <a href="#">Semestres</a>
          <Button text="Déconnexion" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
