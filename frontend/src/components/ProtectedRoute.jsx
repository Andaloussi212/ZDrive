import { Navigate } from 'react-router-dom';
import { ADMIN_AUTH_KEY } from '../constants/adminAuth';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem(ADMIN_AUTH_KEY) === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
