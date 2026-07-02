# ZDrive

ZDrive est une plateforme web privée de gestion de ressources étudiantes.

Le but du projet est de permettre à des étudiants de consulter, organiser et télécharger des documents de cours selon les semestres, les matières et les types de ressources.

## Technologies utilisées

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- MariaDB

### Base de données

- MariaDB

## Fonctionnalités actuelles

### Côté utilisateur

- Affichage des semestres
- Affichage des matières d’un semestre
- Affichage des ressources d’une matière
- Affichage des descriptions, types et formats des ressources

### Côté administrateur

- Tableau de bord avec statistiques
- Liste des ressources
- Ajout d’une ressource
- Modification d’une ressource
- Suppression d’une ressource avec confirmation
- Détection automatique du format du fichier
- Gestion des erreurs si le backend est indisponible

## Structure du projet

```txt
ZDrive/
├── backend/
├── frontend/
└── docs/
```

## Configuration frontend

Dans le dossier `frontend`, créer un fichier `.env` à partir de `.env.example`.

Exemple :

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Installer les dépendances :

```bash
cd frontend
npm install
```

Lancer le frontend :

```bash
npm run dev
```

Le frontend est disponible sur :

```txt
http://localhost:5173
```

## Configuration backend

Dans le dossier `backend`, la configuration de la base de données se fait via des variables d’environnement.

Exemple dans `backend/.env.example` :

```env
DB_URL=jdbc:mariadb://localhost:3306/zdrive_db
DB_USERNAME=zdrive_user
DB_PASSWORD=zdrive_password
```

La configuration Spring Boot utilise ces variables dans `application.properties`.

## Base de données MariaDB

Créer la base de données :

```sql
CREATE DATABASE zdrive_db;
```

Créer l’utilisateur :

```sql
CREATE USER 'zdrive_user'@'localhost' IDENTIFIED BY 'zdrive_password';
```

Donner les droits :

```sql
GRANT ALL PRIVILEGES ON zdrive_db.* TO 'zdrive_user'@'localhost';
FLUSH PRIVILEGES;
```

Insérer les semestres de base :

```sql
INSERT INTO semester (name, year, description)
VALUES
('Semestre 1', '2025-2026', 'Ressources du premier semestre'),
('Semestre 2', '2025-2026', 'Ressources du second semestre'),
('Semestre 3', '2026-2027', 'Ressources du troisième semestre');
```

Insérer les matières de base :

```sql
INSERT INTO subject (name, semester_id)
VALUES
('Bases de la programmation', 1),
('Conception Objet', 2);
```

## Lancement du backend

Depuis le dossier `backend` :

```bash
./mvnw spring-boot:run
```

Le backend est disponible sur :

```txt
http://localhost:8080
```

## Routes API principales

### Santé du backend

```txt
GET /api/health
```

### Semestres

```txt
GET /api/semesters
```

### Matières

```txt
GET /api/subjects
GET /api/subjects?semesterId=1
```

### Ressources

```txt
GET /api/resources
GET /api/resources?subjectId=1
POST /api/resources
PUT /api/resources/{id}
DELETE /api/resources/{id}
```

## Lancement complet du projet

Lancer MariaDB :

```bash
sudo systemctl start mariadb
```

Lancer le backend :

```bash
cd backend
./mvnw spring-boot:run
```

Lancer le frontend dans un autre terminal :

```bash
cd frontend
npm run dev
```

Puis ouvrir :

```txt
http://localhost:5173
```

## Notes

Les fichiers `.env` ne doivent pas être envoyés sur GitHub.

Les fichiers `.env.example` servent d’exemple pour recréer la configuration locale.

## État actuel

Le projet utilise maintenant une vraie base MariaDB pour stocker les semestres, les matières et les ressources.

Le CRUD des ressources est fonctionnel :

- création
- lecture
- modification
- suppression
