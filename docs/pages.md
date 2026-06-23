# ZDrive - Maquette fonctionnelle des pages

## 1. Objectif

Ce document décrit les principales pages de ZDrive et le parcours des utilisateurs dans l’application.

L’objectif est de définir les écrans avant de commencer le développement frontend avec React.

Cette étape permet de savoir quelles pages doivent exister, ce qu’elles doivent contenir, et comment l’utilisateur navigue dans la plateforme.

## 2. Liste des pages

### Pages publiques

- `/login` : page de connexion.

### Pages utilisateur

- `/app` : accueil privé.
- `/app/semesters` : liste des semestres.
- `/app/semesters/:semesterId` : détail d’un semestre avec ses matières.
- `/app/subjects/:subjectId` : détail d’une matière avec ses ressources.

### Pages administrateur

- `/admin` : dashboard administrateur.
- `/admin/resources` : gestion des ressources.
- `/admin/resources/new` : ajout d’une ressource.
- `/admin/resources/:resourceId/edit` : modification d’une ressource.
- `/admin/settings` : paramètres administrateur.

## 3. Parcours utilisateur étudiant

Un étudiant arrive sur la page de connexion.

Après connexion, il accède à l’espace privé de ZDrive.

Il peut consulter les semestres disponibles, choisir un semestre, sélectionner une matière, puis consulter ou télécharger les ressources associées.

Parcours simplifié :

```txt
/login
   ↓
/app
   ↓
/app/semesters
   ↓
/app/semesters/:semesterId
   ↓
/app/subjects/:subjectId
```

## 4. Parcours administrateur

L’administrateur se connecte depuis la même page de connexion.

Après connexion, il peut accéder au dashboard administrateur.

Il peut ajouter, modifier, supprimer et organiser les ressources.

Parcours simplifié :

```txt
/login
   ↓
/admin
   ↓
/admin/resources
   ↓
/admin/resources/new
```

L’administrateur pourra aussi accéder à l’espace utilisateur afin de vérifier ce que les étudiants voient.

## 5. Détail des pages

### `/login`

Contenu prévu :

- nom ou logo ZDrive ;
- phrase courte de présentation ;
- champ identifiant ;
- champ mot de passe ;
- bouton de connexion ;
- message d’erreur si les identifiants sont incorrects.

Objectif de la page :

Permettre à un utilisateur autorisé de se connecter à la plateforme.

---

### `/app`

Contenu prévu :

- message de bienvenue ;
- présentation rapide de la plateforme ;
- accès rapide aux semestres ;
- éventuellement dernières ressources ajoutées.

Objectif de la page :

Servir de page d’accueil privée après connexion.

---

### `/app/semesters`

Contenu prévu :

- liste des semestres disponibles ;
- affichage sous forme de cartes ;
- indication du nombre de matières ou ressources si possible.

Objectif de la page :

Permettre à l’utilisateur de choisir le semestre qu’il veut consulter.

---

### `/app/semesters/:semesterId`

Contenu prévu :

- nom du semestre ;
- liste des matières du semestre ;
- cartes de matières ;
- lien vers chaque matière.

Objectif de la page :

Afficher toutes les matières disponibles pour un semestre précis.

---

### `/app/subjects/:subjectId`

Contenu prévu :

- nom de la matière ;
- liste des ressources disponibles ;
- type de chaque ressource ;
- format du fichier ;
- taille du fichier si possible ;
- bouton consulter ;
- bouton télécharger.

Objectif de la page :

Permettre à l’utilisateur de consulter ou télécharger les fichiers d’une matière.

---

### `/admin`

Contenu prévu :

- résumé de la plateforme ;
- nombre de ressources ;
- nombre de matières ;
- nombre de semestres ;
- accès rapide à la gestion des ressources.

Objectif de la page :

Servir de tableau de bord principal pour l’administrateur.

---

### `/admin/resources`

Contenu prévu :

- tableau ou liste des ressources ;
- titre ;
- matière ;
- semestre ;
- type ;
- date d’ajout ;
- actions modifier et supprimer.

Objectif de la page :

Permettre à l’administrateur de voir toutes les ressources et de les gérer.

---

### `/admin/resources/new`

Contenu prévu :

- formulaire d’ajout de ressource ;
- champ titre ;
- champ description ;
- sélection du semestre ;
- sélection de la matière ;
- sélection du type ;
- champ fichier ;
- bouton d’ajout.

Objectif de la page :

Permettre à l’administrateur d’ajouter une nouvelle ressource à la plateforme.

---

### `/admin/resources/:resourceId/edit`

Contenu prévu :

- formulaire de modification ;
- modification du titre ;
- modification de la description ;
- modification de la matière ;
- modification du type.

Objectif de la page :

Permettre à l’administrateur de modifier les informations d’une ressource existante.

Dans la première version, le remplacement direct du fichier ne sera pas forcément prévu. Il sera possible de supprimer puis d’ajouter une nouvelle ressource si nécessaire.

---

### `/admin/settings`

Contenu prévu :

- changement du mot de passe global étudiant ;
- affichage des types de fichiers autorisés ;
- affichage de la taille maximale d’upload.

Objectif de la page :

Regrouper les paramètres importants liés à l’administration de la plateforme.

## 6. Navigation prévue

### Navigation utilisateur

Pour un étudiant connecté, la navigation principale sera simple :

```txt
ZDrive
Accueil | Semestres | Déconnexion
```

### Navigation administrateur

Pour l’administrateur, la navigation principale sera :

```txt
ZDrive Admin
Dashboard | Ressources | Paramètres | Retour espace étudiant | Déconnexion
```

## 7. Questions ouvertes

Certaines décisions devront être prises plus tard :

- faut-il afficher les dernières ressources ajoutées sur la page d’accueil ?
- faut-il permettre de remplacer un fichier existant ou seulement supprimer puis ajouter ?
- faut-il ajouter une barre de recherche dès la première version ?
- faut-il afficher les ressources sous forme de cartes ou de tableau ?
- faut-il prévoir un mode sombre dès le départ ?
- faut-il afficher le nombre de téléchargements ?
- faut-il permettre le tri par type de ressource ?
- faut-il afficher la taille des fichiers partout ou seulement sur la page d’une matière ?
