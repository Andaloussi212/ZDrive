export const semesters = [
  {
    id: 1,
    name: 'Semestre 1',
    year: '2025-2026',
    description: 'Ressources du premier semestre',
  },
  {
    id: 2,
    name: 'Semestre 2',
    year: '2025-2026',
    description: 'Ressources du second semestre',
  },
  {
    id: 3,
    name: 'Semestre 3',
    year: '2026-2027',
    description: 'Ressources du troisième semestre',
  },
];

export const subjects = [
  {
    id: 1,
    name: 'Bases de la programmation',
    semesterId: 1,
  },
  {
    id: 2,
    name: 'Conception Objet',
    semesterId: 2,
  },
];

export const resources = [
  {
    id: 1,
    title: 'Fiche de révision Java',
    type: 'FICHE',
    format: 'PDF',
    subjectId: 1,
  },
  {
    id: 2,
    title: 'Fiche de révision COO',
    type: 'FICHE',
    format: 'PDF',
    subjectId: 2,
  },
];
export const resourceTypes = ['COURS', 'TD', 'TP', 'FICHE', 'EXAM', 'OTHER'];
