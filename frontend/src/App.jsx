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
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/resources" element={<AdminResourcesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
