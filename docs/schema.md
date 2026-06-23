# ZDrive - Schéma du modèle de données

## 1. Schéma simple

```txt
User
- id
- username
- passwordHash
- role
- createdAt


Semester
- id
- name
- year
- orderIndex

        1
Semester ──────────── * Subject

Subject
- id
- name
- description
- semesterId

        1
Subject ───────────── * Resource

Resource
- id
- title
- description
- originalFilename
- storedFilename
- filePath
- mimeType
- size
- type
- uploadedAt
- subjectId
```

## 2. Explication des relations

Un semestre peut contenir plusieurs matières.

Une matière appartient à un seul semestre.

Une matière peut contenir plusieurs ressources.

Une ressource appartient à une seule matière.

Un utilisateur possède un rôle qui détermine ses droits sur la plateforme.

## 3. Exemple concret

Exemple d’organisation possible :

```txt
Semestre 1
   ↓
Programmation Java
   ↓
Fiche de révision Java.pdf
```

Autre exemple :

```txt
Semestre 2
   ↓
Base de données
   ↓
TD SQL - Jointures.pdf
```

## 4. Notes d'évolution

Pour la première version, le modèle reste simple.

Plus tard, il sera possible d’ajouter :

- une entité `Formation` ;
- une entité `AcademicYear` ;
- des comptes individuels ;
- des tags ;
- un historique des uploads ;
- un champ `uploadedByUserId` pour savoir quel admin a ajouté une ressource ;
- une table `ResourceType` si les types de ressources doivent être personnalisables.

## 5. Décisions actuelles

Pour le MVP, les décisions suivantes sont retenues :

- un utilisateur possède un rôle ;
- les rôles minimum sont `ADMIN` et `STUDENT` ;
- un semestre contient plusieurs matières ;
- une matière contient plusieurs ressources ;
- une ressource est liée à une seule matière ;
- les fichiers sont stockés dans un dossier serveur ;
- la base de données stocke uniquement les métadonnées des fichiers ;
- le type de ressource est géré sous forme d’enum.
