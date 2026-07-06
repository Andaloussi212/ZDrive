import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ADMIN_AUTH_KEY, ADMIN_PASSWORD } from '../constants/adminAuth';

function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== ADMIN_PASSWORD) {
      setError('Mot de passe incorrect');
      return;
    }

    localStorage.setItem(ADMIN_AUTH_KEY, 'true');
    setError('');
    navigate('/admin');
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="form-card-header">
          <span>Admin</span>
          <h2>Connexion ZDrive</h2>
          <p>Entre le mot de passe administrateur pour accéder au dashboard.</p>
        </div>

        <form className="admin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Mot de passe admin"
            />
          </div>

          {error && <p className="empty-message message-error">{error}</p>}

          <Button text="Se connecter" type="submit" />
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
