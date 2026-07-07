import { ADMIN_PASSWORD } from '../constants/adminAuth';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function handleResponse(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      errorMessage || 'Erreur lors de la communication avec le serveur'
    );
  }

  return response;
}

export async function getSemesters() {
  const response = await fetch(`${API_BASE_URL}/semesters`);
  const checkedResponse = await handleResponse(response);
  return checkedResponse.json();
}

export async function getSubjects(semesterId) {
  const url = semesterId
    ? `${API_BASE_URL}/subjects?semesterId=${semesterId}`
    : `${API_BASE_URL}/subjects`;

  const response = await fetch(url);
  const checkedResponse = await handleResponse(response);
  return checkedResponse.json();
}

export async function getResources(subjectId) {
  const url = subjectId
    ? `${API_BASE_URL}/resources?subjectId=${subjectId}`
    : `${API_BASE_URL}/resources`;

  const response = await fetch(url);
  const checkedResponse = await handleResponse(response);
  return checkedResponse.json();
}

export async function createResource(resourceData) {
  const response = await fetch(`${API_BASE_URL}/resources`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(resourceData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function deleteResource(id) {
  const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
    method: 'DELETE',
    headers: {
      'X-Admin-Password': ADMIN_PASSWORD,
    },
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function updateResource(id, resourceData) {
  const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(resourceData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/files/upload`, {
    method: 'POST',
    headers: {
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: formData,
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function createSemester(semesterData) {
  const response = await fetch(`${API_BASE_URL}/semesters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(semesterData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function updateSemester(id, semesterData) {
  const response = await fetch(`${API_BASE_URL}/semesters/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(semesterData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function deleteSemester(id) {
  const response = await fetch(`${API_BASE_URL}/semesters/${id}`, {
    method: 'DELETE',
    headers: {
      'X-Admin-Password': ADMIN_PASSWORD,
    },
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function createSubject(subjectData) {
  const response = await fetch(`${API_BASE_URL}/subjects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(subjectData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function updateSubject(id, subjectData) {
  const response = await fetch(`${API_BASE_URL}/subjects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Admin-Password': ADMIN_PASSWORD,
    },
    body: JSON.stringify(subjectData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function deleteSubject(id) {
  const response = await fetch(`${API_BASE_URL}/subjects/${id}`, {
    method: 'DELETE',
    headers: {
      'X-Admin-Password': ADMIN_PASSWORD,
    },
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}
