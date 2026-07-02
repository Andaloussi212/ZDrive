const API_BASE_URL = 'http://localhost:8080/api';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Erreur lors de la communication avec le serveur');
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
    },
    body: JSON.stringify(resourceData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function deleteResource(id) {
  const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
    method: 'DELETE',
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}

export async function updateResource(id, resourceData) {
  const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resourceData),
  });

  const checkedResponse = await handleResponse(response);
  return checkedResponse.text();
}
