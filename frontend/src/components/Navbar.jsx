import Button from './Button';
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">ZDrive</div>
        <div className="links">
          <a href="#">Accueil</a>
          <a href="#">Semestre</a>
          <Button text="Déconnexion" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
