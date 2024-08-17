# Projet de Gestion de Cartes

Ce projet est une application React qui affiche des cartes de projets avec des images de fond. Les cartes réagissent aux événements de survol et s'adaptent en fonction de la taille de l'écran (mobile ou desktop). La configuration est organisée en plusieurs fichiers pour une meilleure modularité et maintenabilité.


## Structure des Fichiers

### 1. `projectData.js` (dans le dossier `data`)
Ce fichier contient les données des projets affichés sur les cartes. Chaque projet inclut les informations suivantes :
- **`imageSrc`** : URL de l'image de fond.
- **`title`** : Titre du projet.
- **`description`** : Description du projet.
- **`link`** : Lien vers le projet.
- **`offsetXMobile`** et **`offsetYMobile`** : Décalages de l'image pour la vue mobile.
- **`offsetXDesktop`** et **`offsetYDesktop`** : Décalages de l'image pour la vue desktop.

### 2. `useResponsiveHover.js` (dans le dossier `hooks`)
Ce hook personnalisé gère les états de survol et de réactivité mobile. Il expose les états suivants :
- **`isMobile`** : Boolean indiquant si l'écran est en mode mobile.
- **`hoveredIndex`** : Index de l'élément actuellement survolé.
- **`onMouseEnter`** : Fonction à appeler lors du survol d'un élément.
- **`onMouseLeave`** : Fonction à appeler lorsque la souris quitte un élément.

### 3. `backgroundPosition.js` (dans le dossier `utils`)
Ce fichier contient une fonction utilitaire pour déterminer la position de fond de l'image dans les cartes en fonction du survol et du mode d'affichage.
#### Fonction `getBackgroundPosition` :
- **Paramètres** :
  - **`index`** : Index du projet actuel.
  - **`hoveredIndex`** : Index de l'élément actuellement survolé.
  - **`isMobile`** : Boolean indiquant si l'écran est en mode mobile.
  - **`projectData`** : Données des projets.
- **Retour** : Position de fond de l'image sous forme de chaîne de caractères.

### 4. `Projects.jsx` (dans le dossier `components`)
Ce composant affiche les cartes des projets. Il utilise les données du fichier `projectData`, le hook `useResponsiveHover`, et la fonction `getBackgroundPosition` pour gérer le rendu des cartes avec les images de fond.
Le composant utilise les données des projets pour rendre chaque carte, applique les styles appropriés en fonction du mode (mobile ou desktop), et ajuste la position de l'image de fond en fonction du survol et du mode d'affichage.
