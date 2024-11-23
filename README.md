Documentation API Recettes de Cuisine

Cette API permet de gérer les recettes de cuisine d'une application web.

Endpoints

Recettes

Créer une recette
- Endpoint : `POST /api/recettes`
- Paramètres :
  - `title` (obligatoire) : Titre de la recette
  - `description` (obligatoire) : Description de la recette
  - `image` (obligatoire) : URL de l'image de la recette
  - `userId` (obligatoire) : ID de l'utilisateur qui a créé la recette
- Réponse : Objet recette créé

Récupérer toutes les recettes
- Endpoint : `GET /api/recettes`
- Réponse : Liste des recettes

Récupérer une recette par ID
- Endpoint : `GET /api/recettes/:id`
- Paramètres :
  - `id` (obligatoire) : ID de la recette à récupérer
- Réponse : Objet recette

 Mettre à jour une recette
- Endpoint : `PUT /api/recettes/:id`
- Paramètres :
  - `id` (obligatoire) : ID de la recette à mettre à jour
  - `title` : Nouveau titre de la recette
  - `description` : Nouvelle description de la recette
  - `image` : Nouvelle URL de l'image de la recette
- Réponse : Objet recette mis à jour

Supprimer une recette
- Endpoint : `DELETE /api/recettes/:id`
- Paramètres :
  - `id` (obligatoire) : ID de la recette à supprimer
- Réponse : Aucune réponse (code 204)

Utilisateurs

S'inscrire
- Endpoint : `POST /api/utilisateurs/register`
- Paramètres :
  - `username` (obligatoire) : Nom d'utilisateur
  - `name` (obligatoire) : Nom complet de l'utilisateur
  - `email` (obligatoire) : Adresse email de l'utilisateur
  - `password` (obligatoire) : Mot de passe de l'utilisateur
- Réponse : Objet utilisateur créé

Se connecter
- Endpoint : `POST /api/utilisateurs/login`
- Paramètres :
  - `username` ou `email` (obligatoire) : Identifiant de l'utilisateur
  - `password` (obligatoire) : Mot de passe de l'utilisateur
- Réponse : Jeton d'authentification (token)

Utilisation

Endpoints

L'application expose les endpoints suivants :

Recettes

- `POST /api/recettes` : Créer une nouvelle recette
- `GET /api/recettes` : Récupérer toutes les recettes
- `GET /api/recettes/:id` : Récupérer une recette par son ID
- `PUT /api/recettes/:id` : Mettre à jour une recette
- `DELETE /api/recettes/:id` : Supprimer une recette

Utilisateurs

- `POST /api/utilisateurs/register` : S'inscrire
- `POST /api/utilisateurs/login` : Se connecter

Authentification

L'API utilise un système d'authentification par jeton (token) JWT. Pour accéder aux endpoints protégés (création, mise à jour et suppression de recettes), vous devez inclure le jeton d'authentification dans l'en-tête `Authorization` de vos requêtes.

Exemple :
```
Authorization: <token>
```

Erreurs

En cas d'erreur, l'API renvoie un code HTTP approprié et un objet JSON avec un message d'erreur.

Exemple de réponse d'erreur :
```json
{
  "error": "Recette non trouvée"
}
```

Installation et configuration

1. Clonez le dépôt Git de l'application.
2. Installez les dépendances avec `npm install`.
3. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires (connexion à la base de données, secret JWT, etc.).
4. Lancez le serveur avec `npm start`.

Technologies utilisées

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (base de données)
- JSON Web Tokens (JWT) pour l'authentification
- bcrypt pour le hachage des mots de passe

Voici les explications techniques pour la configuration et l'utilisation de l'application :

Configuration

Variables d'environnement

L'application utilise les variables d'environnement suivantes :

- `DB_NAME` : Nom de la base de données
- `DB_USER` : Utilisateur de la base de données
- `DB_PASSWORD` : Mot de passe de la base de données
- `DB_HOST` : Hôte de la base de données
- `JWT_SECRET` : Clé secrète pour la génération des tokens JWT
- `PORT` : Port d'écoute du serveur (optionnel, par défaut 5000)

Vous devez créer un fichier `.env` à la racine du projet et y définir ces variables.

Exemple de fichier `.env` :

```
DB_NAME=recettes_db
DB_USER=root
DB_PASSWORD=password
DB_HOST=localhost
JWT_SECRET=mysecretkey
PORT=5000
```

Installation des dépendances

Après avoir cloné le dépôt Git, installez les dépendances du projet avec la commande suivante :

```
npm install
```

Lancement de l'application

Pour lancer l'application, utilisez la commande suivante :

```
npm start
```

Cela démarre le serveur Express sur le port configuré (ou le port 5000 par défaut).

Authentification

L'API utilise un système d'authentification par jeton (token) JWT. Lorsqu'un utilisateur se connecte, il reçoit un jeton d'authentification qui doit être inclus dans l'en-tête `Authorization` de toutes les requêtes nécessitant une authentification.

Exemple de requête avec le jeton d'authentification :

```
Authorization: <token>
```

Gestion des erreurs

En cas d'erreur, l'API renvoie un code HTTP approprié et un objet JSON avec un message d'erreur.

Exemple de réponse d'erreur :

```json
{
  "error": "Recette non trouvée"
}
```

Technologies utilisées

L'application utilise les technologies suivantes :

- Node.js : Environnement d'exécution JavaScript côté serveur
- Express.js : Framework web pour Node.js
- Sequelize : ORM (Object-Relational Mapping) pour interagir avec la base de données
- MySQL : Système de gestion de base de données relationnelle
- JSON Web Tokens (JWT) : Système d'authentification par jeton
- bcrypt : Bibliothèque de hachage de mots de passe

"dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-validator": "^7.2.0",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.11.4",
    "nodemon": "^3.1.7",
    "sequelize": "^6.37.5"
  }

Déploiement

Pour déployer l'application, vous pouvez suivre les étapes suivantes :

1. Configurez les variables d'environnement sur votre serveur de production.
2. Construisez l'application avec la commande `npm run build`.
3. Déployez les fichiers de l'application sur votre serveur.
4. Lancez l'application avec la commande `npm run dev`.
