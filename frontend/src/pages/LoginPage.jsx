import Button from '../components/Button';

function LoginPage() {
  return (
    <>
      <main className="login-page">
        <section className="login-card">
          <h1>ZDrive</h1>
          <p>Connexion à la plateforme</p>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="identifiant">Identifiant</label>
              <input type="text" id="identifiant" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" />
            </div>
            <Button text="Se Connecter" />
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginPage;
