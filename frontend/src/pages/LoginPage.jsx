function LoginPage() {
  return (
    <>
      <h1>ZDrive</h1>
      <p>Connextion à la plateforme</p>
      <form action="">
        <label htmlFor="indentifiant">Identifiant</label>
        <input type="text" id="indentifiant" /> <br />
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" /> <br />
        <br />
      </form>
      <button>Se Connecter</button>
    </>
  );
}

export default LoginPage;
