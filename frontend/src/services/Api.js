const API_BASE_URL = 'http://localhost:8080/api';

export async function getSemesters() {
  const response = await fetch(`${API_BASE_URL}/semesters`);
  return response.json();
}

export async function getSubjects() {
  const response = await fetch(`${API_BASE_URL}/subjects`);
  return response.json();
}

export async function getResources() {
  const response = await fetch(`${API_BASE_URL}/resources`);
  return response.json();
}
