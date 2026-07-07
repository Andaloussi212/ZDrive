import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SemestersPage from './pages/SemestersPage';
import SubjectsPage from './pages/SubjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import HomePage from './pages/HomePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminResourcesPage from './pages/AdminResourcesPage';
import AdminNewResourcePage from './pages/AdminNewResourcePage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import AdminEditResourcePage from './pages/AdminEditResourcePage';
import AdminSemestersPage from './pages/AdminSemestersPage';
import AdminSubjectsPage from './pages/AdminSubjectsPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/semesters" element={<SemestersPage />} />
        <Route path="/semesters/:semesterId" element={<SubjectsPage />} />
        <Route path="/subjects/:subjectId" element={<ResourcesPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/resources"
          element={
            <ProtectedRoute>
              <AdminResourcesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/resources/new"
          element={
            <ProtectedRoute>
              <AdminNewResourcePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/resources/:resourceId/edit"
          element={
            <ProtectedRoute>
              <AdminEditResourcePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminSettingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/semesters"
          element={
            <ProtectedRoute>
              <AdminSemestersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/subjects"
          element={
            <ProtectedRoute>
              <AdminSubjectsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
