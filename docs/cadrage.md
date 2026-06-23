# ZDrive - Cadrage du projet

## 1. Description courte du projet

ZDrive est une plateforme web privée permettant de centraliser des ressources de cours comme des fiches personnelles, des prises de notes, des exercices, des documents autorisés et d’autres contenus utiles pour les étudiants.

L’objectif est de rendre ces ressources facilement accessibles depuis un site web, avec la possibilité de les consulter directement en ligne ou de les télécharger.

Le projet est pensé pour évoluer dans le temps. Il pourra d’abord être utilisé pour mes propres cours, puis être adapté plus tard à plusieurs semestres, formations, années ou promotions.

## 2. Objectif du projet

L’objectif principal de ZDrive est de créer un outil utile, propre et sécurisé pour organiser des ressources étudiantes.

Ce projet a aussi un objectif personnel d’apprentissage. Il doit me permettre de progresser sérieusement sur des technologies modernes comme React, Spring Boot, MariaDB, Docker, le déploiement sur VPS et la sécurisation d’une application web.

À terme, ZDrive doit être suffisamment propre pour être présenté dans mon portfolio, sur mon CV ou lors d’un entretien, comme un vrai projet complet mêlant frontend, backend, base de données, sécurité et déploiement.

## 3. Fonctionnalités MVP

Pour la première version du projet, les fonctionnalités principales seront :

- accéder à une page de connexion ;
- se connecter avec un identifiant et un mot de passe ;
- accéder à une page d’accueil privée après connexion ;
- afficher les semestres disponibles ;
- afficher les matières associées à chaque semestre ;
- afficher les fichiers disponibles pour une matière ;
- consulter directement certains fichiers comme les PDF ou les images ;
- télécharger les fichiers ;
- accéder à un espace administrateur ;
- ajouter une ressource depuis l’espace administrateur ;
- modifier les informations d’une ressource ;
- supprimer une ressource ;
- organiser les ressources par semestre, matière et type ;
- changer le mot de passe global étudiant si nécessaire.

## 4. Public visé

Le public visé est composé principalement d’étudiants ayant besoin d’accéder rapidement à des ressources de cours organisées.

Dans un premier temps, la plateforme sera utilisée par moi-même et quelques étudiants autorisés. Plus tard, elle pourra être adaptée à d’autres promotions, formations ou années d’étude.

L’accès au site ne sera pas public. Les utilisateurs devront être connectés pour consulter ou télécharger les ressources.

## 5. Rôles utilisateurs

### ADMIN

L’administrateur correspond à mon compte personnel. Il possède tous les droits sur la plateforme.

Il peut ajouter, modifier, supprimer et organiser les ressources. Il peut aussi gérer les accès, modifier le mot de passe global étudiant et accéder au dashboard d’administration.

### STUDENT

Le rôle étudiant correspond aux utilisateurs autorisés à consulter la plateforme.

Un étudiant peut se connecter, consulter les semestres, voir les matières, accéder aux fichiers disponibles et les télécharger. Il ne peut pas ajouter, modifier ou supprimer de ressources.

## 6. Fonctionnalités futures

Après la première version, plusieurs améliorations pourront être ajoutées :

- création de vrais comptes individuels pour chaque étudiant ;
- gestion de plusieurs formations ;
- gestion de plusieurs années universitaires ;
- recherche de fichiers par nom, matière ou type ;
- système de tags ;
- favoris ;
- statistiques de téléchargement ;
- historique des fichiers ajoutés ;
- meilleure gestion des permissions ;
- interface d’administration plus complète ;
- système de sauvegarde automatique ;
- amélioration de la prévisualisation des fichiers ;
- ajout d’un mode sombre ;
- notifications ou messages d’information.

Ces fonctionnalités ne sont pas prioritaires pour la première version. Elles pourront être ajoutées progressivement une fois le MVP terminé.

## 7. Contraintes de sécurité

La sécurité doit être prise en compte dès le début du projet.

Les mots de passe ne doivent jamais être stockés en clair. Ils devront être hashés avant d’être enregistrés en base de données.

Les routes privées devront être protégées afin qu’un utilisateur non connecté ne puisse pas accéder aux ressources.

Les fichiers ne devront pas être accessibles directement depuis une URL publique sans vérification de l’authentification.

Les fichiers envoyés par l’administrateur devront être validés afin d’éviter les fichiers dangereux ou non autorisés.

Les informations sensibles comme les mots de passe, les clés secrètes ou les identifiants de base de données devront être stockées dans des variables d’environnement.

Lors du déploiement, le site devra utiliser HTTPS afin de sécuriser les échanges entre l’utilisateur et le serveur.

## 8. Stack technique prévue

La stack technique prévue pour le projet est la suivante :

- Frontend : React ;
- Backend : Spring Boot ;
- Base de données : MariaDB ;
- Stockage des fichiers : dossier serveur dans un premier temps ;
- Déploiement : VPS Linux ;
- Serveur web / reverse proxy : probablement Nginx ;
- Conteneurisation : Docker si cela devient pertinent ;
- Sécurité : authentification, rôles, hash des mots de passe, routes protégées et HTTPS.

Cette stack est choisie pour apprendre des technologies sérieuses et construire un projet complet, proche d’un vrai environnement professionnel.

## 9. Questions encore ouvertes

Certaines décisions techniques devront être prises plus tard pendant le développement :

- faut-il utiliser une authentification par session/cookie ou par JWT ?
- quelle structure exacte utiliser pour organiser les fichiers sur le serveur ?
- quels types de fichiers seront autorisés au départ ?
- quelle taille maximale autoriser pour les fichiers uploadés ?
- faut-il prévoir plusieurs formations dès la première version ou seulement plus tard ?
- comment organiser précisément le dashboard admin ?
- à quel moment intégrer Docker ?
- quelle stratégie de sauvegarde mettre en place pour les fichiers et la base de données ?
