# ZDrive - Modèle de données

## 1. Objectif du modèle de données

Le modèle de données de ZDrive sert à organiser clairement les informations utilisées par la plateforme.

Il doit permettre de stocker les utilisateurs, les semestres, les matières et les ressources disponibles sur le site. L’objectif est de pouvoir retrouver facilement les fichiers selon leur semestre, leur matière et leur type.

Ce modèle doit rester simple pour la première version du projet, tout en étant assez propre pour pouvoir évoluer plus tard vers plusieurs formations, années ou promotions.

## 2. Entités principales

Pour la première version de ZDrive, les entités principales sont :

- **User** : représente un utilisateur de la plateforme, comme l’administrateur ou l’accès étudiant partagé.
- **Semester** : représente un semestre, par exemple Semestre 1 ou Semestre 2.
- **Subject** : représente une matière liée à un semestre, par exemple Programmation Java, Base de données ou Réseaux.
- **Resource** : représente une ressource mise à disposition, comme un PDF, une fiche, un exercice, un TD, un TP ou un examen.

Pour le type de ressource, la première version utilisera une liste de types prédéfinis plutôt qu’une table séparée.

Exemples de types possibles :

- COURSE
- TD
- TP
- FICHE
- EXERCISE
- EXAM
- OTHER

## 3. Relations entre les entités

Les relations principales sont les suivantes :

- Un semestre contient plusieurs matières.
- Une matière appartient à un seul semestre.
- Une matière contient plusieurs ressources.
- Une ressource appartient à une seule matière.
- Un utilisateur possède un rôle.
- Un rôle permet de différencier les droits entre un administrateur et un étudiant.

Schéma simple :

```txt
User

Semester
   ↓
Subject
   ↓
Resource
```

Exemple concret :

```txt
Semestre 2
   ↓
Base de données
   ↓
Fiche de révision SQL.pdf
```

## 4. Détail des entités

### User

L’entité `User` sert à gérer les accès à la plateforme.

Champs prévus :

- `id` : identifiant unique de l’utilisateur.
- `username` : nom d’utilisateur utilisé pour se connecter.
- `passwordHash` : mot de passe hashé.
- `role` : rôle de l’utilisateur, par exemple ADMIN ou STUDENT.
- `createdAt` : date de création du compte.

Exemples de rôles :

- `ADMIN` : peut gérer toute la plateforme.
- `STUDENT` : peut consulter et télécharger les ressources.

Le mot de passe ne doit jamais être stocké en clair. Seul le hash du mot de passe doit être enregistré en base de données.

---

### Semester

L’entité `Semester` sert à organiser les ressources par semestre.

Champs prévus :

- `id` : identifiant unique du semestre.
- `name` : nom du semestre, par exemple Semestre 1.
- `year` : année universitaire, par exemple 2025-2026.
- `orderIndex` : ordre d’affichage du semestre.

Exemple :

```txt
id: 1
name: Semestre 1
year: 2025-2026
orderIndex: 1
```

---

### Subject

L’entité `Subject` représente une matière.

Champs prévus :

- `id` : identifiant unique de la matière.
- `name` : nom de la matière.
- `description` : courte description optionnelle.
- `semesterId` : identifiant du semestre auquel la matière appartient.

Exemple :

```txt
id: 1
name: Programmation Java
description: Cours, TP et exercices liés à Java.
semesterId: 1
```

---

### Resource

L’entité `Resource` représente un fichier disponible sur la plateforme.

Champs prévus :

- `id` : identifiant unique de la ressource.
- `title` : titre affiché sur le site.
- `description` : courte description optionnelle.
- `originalFilename` : nom original du fichier envoyé.
- `storedFilename` : nom réel du fichier stocké sur le serveur.
- `filePath` : chemin du fichier sur le serveur.
- `mimeType` : type du fichier, par exemple application/pdf.
- `size` : taille du fichier.
- `type` : type de ressource, par exemple COURSE, TD, TP, FICHE, EXAM ou OTHER.
- `uploadedAt` : date d’ajout du fichier.
- `subjectId` : identifiant de la matière liée à la ressource.

Exemple :

```txt
id: 1
title: Fiche de révision SQL
description: Résumé des notions importantes de SQL.
originalFilename: fiche-sql.pdf
storedFilename: 9f3a2c-fiche-sql.pdf
filePath: storage/uploads/2025-2026/s2/bdd/9f3a2c-fiche-sql.pdf
mimeType: application/pdf
size: 245000
type: FICHE
uploadedAt: 2026-06-23
subjectId: 3
```

La différence entre `originalFilename` et `storedFilename` est importante.

`originalFilename` correspond au nom du fichier envoyé par l’administrateur.

`storedFilename` correspond au nom utilisé réellement sur le serveur. Il permet d’éviter les conflits si deux fichiers ont le même nom et de limiter les problèmes liés aux caractères spéciaux.

## 5. Choix techniques

Pour la première version, le modèle restera volontairement simple.

Les fichiers ne seront pas stockés directement dans la base de données. Ils seront stockés dans un dossier du serveur, tandis que la base de données gardera uniquement les informations nécessaires pour les retrouver.

Exemple :

```txt
storage/uploads/
```

La base de données contiendra donc les métadonnées des fichiers :

- titre ;
- description ;
- nom original ;
- nom stocké ;
- chemin ;
- type MIME ;
- taille ;
- type de ressource ;
- matière liée.

Pour les types de ressources, la première version utilisera une liste prédéfinie plutôt qu’une table `ResourceType`.

Choix retenu :

```txt
Type de ressource sous forme d'enum
```

Ce choix est plus simple pour commencer et suffisant pour le MVP.

Plus tard, si le projet évolue, il sera possible de créer une table `ResourceType` afin de permettre à l’administrateur de créer ses propres types depuis le dashboard.

## 6. Questions ouvertes

Certaines décisions devront être précisées plus tard :

- faut-il ajouter une entité `Formation` pour gérer plusieurs formations ?
- faut-il ajouter une entité `AcademicYear` pour gérer plusieurs années universitaires ?
- faut-il permettre à l’administrateur de créer ses propres types de ressources ?
- quels types de fichiers seront autorisés au départ ?
- quelle taille maximale sera autorisée pour les fichiers ?
- comment organiser physiquement les fichiers sur le serveur ?
- faut-il ajouter un système de tags ?
- faut-il ajouter une recherche par nom, matière ou type ?
- faut-il garder un historique des modifications ou suppressions ?
