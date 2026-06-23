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
