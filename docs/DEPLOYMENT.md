# Déploiement ZDrive

Ce document décrit les grandes étapes pour déployer ZDrive sur un VPS.

## Architecture prévue

- Nginx sert le frontend React buildé
- Nginx redirige `/api` vers le backend Spring Boot
- Nginx redirige `/uploads` vers le backend Spring Boot
- Le backend tourne avec systemd
- MariaDB stocke les données
- Le dossier `uploads/` reste persistant sur le serveur

## Variables d’environnement backend

```env
DB_URL=jdbc:mariadb://localhost:3306/zdrive_db
DB_USERNAME=zdrive_user
DB_PASSWORD=change_me
ADMIN_PASSWORD=change_me
FRONTEND_URL=https://ton-domaine.fr
```

## Variables d’environnement frontend

```env
VITE_API_BASE_URL=https://ton-domaine.fr/api
VITE_BACKEND_BASE_URL=https://ton-domaine.fr
VITE_ADMIN_PASSWORD=change_me
```

`VITE_ADMIN_PASSWORD` et `ADMIN_PASSWORD` doivent avoir la même valeur.

## Build local

Depuis la racine du projet :

```bash
./scripts/build-prod.sh
```

Résultat attendu :

```txt
frontend/dist
backend/target/*.jar
```

## Backend avec systemd

Un exemple de service est disponible ici :

```txt
backend/zdrive.service.example
```

Sur le VPS, il devra être copié vers :

```txt
/etc/systemd/system/zdrive.service
```

Puis activé avec :

```bash
sudo systemctl daemon-reload
sudo systemctl enable zdrive
sudo systemctl start zdrive
sudo systemctl status zdrive
```

## Nginx

Un exemple de configuration est disponible ici :

```txt
deploy/zdrive.nginx.example
```

Il servira à :

- exposer le frontend
- rediriger `/api` vers Spring Boot
- rediriger `/uploads` vers Spring Boot
- autoriser les fichiers jusqu’à 50 MB

## Dossier uploads

Sur le VPS, créer le dossier :

```bash
mkdir -p /opt/zdrive/backend/uploads
```

Le dossier doit rester persistant et ne doit pas être suivi par Git.

## Étapes restantes sur VPS

1. Installer Java
2. Installer MariaDB
3. Créer la base `zdrive_db`
4. Créer l’utilisateur MariaDB
5. Installer Nginx
6. Copier le frontend buildé dans `/var/www/zdrive`
7. Copier le backend `.jar` dans `/opt/zdrive/backend`
8. Configurer systemd
9. Configurer Nginx
10. Ajouter HTTPS avec Certbot

## Notes de sécurité

- Ne jamais pousser les fichiers `.env` sur GitHub
- Ne jamais mettre le vrai mot de passe admin directement dans le code
- Ne pas versionner le dossier `uploads/`
- Utiliser des variables d’environnement en production
- Vérifier que les actions admin sont protégées côté backend
- Vérifier que `POST /api/files/upload` est protégé par le header admin

## Commandes utiles

Tester le backend :

```bash
curl http://localhost:8080/api/health
```

Tester le build frontend :

```bash
cd frontend
npm run build
```

Tester le build backend :

```bash
cd backend
./mvnw clean package
```

Lancer le backend en mode production locale :

```bash
cd backend
java -jar target/backend-0.0.1-SNAPSHOT.jar
```
