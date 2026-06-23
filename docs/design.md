# ZDrive - Direction artistique et design system

## 1. Objectif

Ce document définit la direction artistique de ZDrive.

L’objectif est de donner au projet une identité visuelle cohérente avant de commencer le développement frontend avec React.

Le design doit être moderne, sérieux, lisible et responsive. Il doit donner l’impression d’un outil propre et fiable, sans être trop chargé ni trop vide.

## 2. Ambiance générale

ZDrive doit avoir une ambiance de plateforme privée, organisée et professionnelle.

L’inspiration principale est un vert profond, légèrement inspiré de Zelda/Link, mais utilisé de manière sobre pour garder un rendu sérieux.

Mots-clés de l’identité visuelle :

- moderne ;
- sérieux ;
- clair ;
- organisé ;
- étudiant ;
- fiable ;
- légèrement premium.

## 3. Palette de couleurs

Couleurs principales :

- Vert principal : `#1F7A4D`
- Vert sombre : `#0F3D2E`
- Vert clair : `#D8F3DC`
- Fond clair : `#F7F5EF`
- Texte principal : `#1E1E1E`
- Texte secondaire : `#6B7280`
- Bordures : `#E5E7EB`
- Accent doré discret : `#C9A227`

Couleurs fonctionnelles :

- Erreur : `#DC2626`
- Succès : `#16A34A`

Utilisation prévue :

- le vert principal servira aux boutons importants, liens actifs et éléments forts ;
- le vert sombre pourra être utilisé pour les headers, la sidebar ou certains fonds ;
- le fond clair servira à éviter un rendu trop blanc ou trop froid ;
- l’accent doré devra rester discret ;
- le rouge sera réservé aux erreurs ou suppressions.

## 4. Typographie

La police principale prévue est `Inter`.

Si elle n’est pas disponible, une police système pourra être utilisée avec `system-ui`.

Utilisation prévue :

- titres : texte plus grand, semi-bold ;
- paragraphes : texte simple et lisible ;
- boutons : texte court, clair et lisible ;
- informations secondaires : texte plus petit et gris.

## 5. Style des pages

### Page de connexion

La page de connexion doit être simple et rassurante.

Elle doit contenir :

- le nom ou logo ZDrive ;
- une courte phrase de présentation ;
- un formulaire centré ;
- un champ identifiant ;
- un champ mot de passe ;
- un bouton de connexion ;
- un message d’erreur si besoin.

### Espace utilisateur

L’espace utilisateur doit être clair et facile à parcourir.

Les semestres, matières et ressources pourront être affichés sous forme de cartes.

L’objectif est que l’utilisateur trouve rapidement le fichier dont il a besoin.

### Espace administrateur

L’espace administrateur doit ressembler davantage à un outil de gestion.

Il doit contenir :

- une navigation claire ;
- des statistiques simples ;
- des tableaux ou listes de ressources ;
- des boutons d’action visibles ;
- des formulaires propres.

## 6. Composants principaux

Les composants importants à prévoir sont :

- bouton principal ;
- bouton secondaire ;
- bouton danger ;
- carte de semestre ;
- carte de matière ;
- carte ou ligne de ressource ;
- formulaire ;
- champ de saisie ;
- message d’erreur ;
- badge de type de ressource ;
- barre de navigation ;
- layout admin.

## 7. Style des composants

### Bouton principal

Le bouton principal utilise le vert principal avec un texte blanc.

Il sert aux actions importantes comme se connecter, ajouter une ressource ou valider un formulaire.

### Bouton secondaire

Le bouton secondaire est plus discret.

Il peut utiliser un fond blanc, une bordure grise et un texte sombre.

### Bouton danger

Le bouton danger est réservé aux actions risquées, comme supprimer une ressource.

Il doit utiliser une couleur rouge et être facilement identifiable.

### Cartes

Les cartes doivent avoir :

- un fond clair ;
- une bordure légère ;
- des coins arrondis ;
- une ombre très discrète ;
- un titre clair ;
- une action visible.

### Formulaires

Les formulaires doivent être simples, espacés et lisibles.

Chaque champ doit avoir un label clair.

Les erreurs doivent être affichées près du champ concerné ou sous le formulaire.

## 8. Responsive design

Le site doit être utilisable sur ordinateur et téléphone.

Sur ordinateur, les cartes pourront être affichées en grille.

Sur téléphone, elles devront passer en une seule colonne.

Les boutons doivent rester faciles à cliquer sur petit écran.

## 9. Questions ouvertes

- Faut-il ajouter un mode sombre dès la première version ?
- Faut-il créer un logo simple pour ZDrive ?
- Faut-il utiliser une sidebar ou une navbar pour l’espace admin ?
- Faut-il afficher les ressources en cartes ou en tableau côté utilisateur ?
- Faut-il utiliser des icônes pour les types de fichiers ?
