# Application de Révision de Droit L2

Une application interactive pour réviser vos cours de droit de Licence 2. L'application propose plusieurs types d'exercices (flashcards, QCM, vrai/faux, association de jurisprudence) pour tester vos connaissances.

## Fonctionnalités

- **Navigation intuitive** : Parcourez les matières, les séances et les exercices facilement
- **Plusieurs types d'exercices** :
  - Flashcards pour la mémorisation
  - QCM pour tester vos connaissances
  - Vrai ou Faux pour vérifier votre compréhension
  - Association de jurisprudence pour maîtriser les arrêts importants
- **Système de notation** : Obtenez une note sur 10 à la fin de chaque exercice
- **Suivi des progrès** : Score global affiché dans l'en-tête
- **Niveaux de difficulté** : Facile, Moyen, Difficile
- **Responsive design** : Adapté aux ordinateurs, tablettes et smartphones

## Structure des données

Les données sont organisées dans le fichier `data.js` avec la structure suivante :

```javascript
const subjectsData = [
    {
        id: 'droit-administratif',
        name: 'Droit Administratif',
        description: 'Description de la matière',
        icon: '🏛️',
        sessions: [
            {
                id: 'critere-droit-administratif',
                name: 'Séance 1: Le critère du droit administratif',
                description: 'Description de la séance',
                icon: '⚖️',
                exercises: [
                    {
                        id: 'flashcards-critere-1',
                        type: 'flashcards',
                        name: 'Flashcards - Concepts clés',
                        level: 'easy',
                        questions: 10,
                        description: 'Description de l\'exercice',
                        data: [...]
                    },
                    // Autres exercices...
                ]
            },
            // Autres séances...
        ]
    },
    // Autres matières...
];
```

## Types d'exercices

### 1. Flashcards
Format des données :
```javascript
{
    question: "Question",
    answer: "Réponse"
}
```

### 2. QCM
Format des données :
```javascript
{
    question: "Question",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 1, // Index de la bonne réponse (0-based)
    explanation: "Explication de la réponse"
}
```

### 3. Vrai ou Faux
Format des données :
```javascript
{
    statement: "Affirmation",
    answer: true/false,
    explanation: "Explication"
}
```

### 4. Association de Jurisprudence
Format des données :
```javascript
{
    jurisprudence: "Nom de l'arrêt",
    contribution: "Apport jurisprudentiel"
}
```

## Personnalisation

Pour ajouter de nouvelles matières, séances ou exercices :

1. **Ajouter une matière** : Ajoutez un nouvel objet au tableau `subjectsData` dans `data.js`
2. **Ajouter une séance** : Ajoutez une séance au tableau `sessions` de la matière concernée
3. **Ajouter un exercice** : Ajoutez un exercice au tableau `exercises` de la séance concernée

## Technologies utilisées

- HTML5
- CSS3 (avec Flexbox et Grid)
- JavaScript Vanilla (ES6+)
- Pas de dépendances externes (sauf Google Fonts pour les polices)

## Installation

1. Clonez ce dépôt ou téléchargez les fichiers
2. Ouvrez le fichier `index.html` dans un navigateur web
3. Commencez à réviser !

## Navigation

- **Page d'accueil** : Liste des matières disponibles
- **Page matière** : Liste des séances pour une matière
- **Page séance** : Liste des exercices pour une séance
- **Page exercice** : Exécution de l'exercice sélectionné
- **Page résultats** : Affichage des résultats après un exercice

## Contenu inclus

### Droit Administratif
- Séance 1: Le critère du droit administratif
  - Flashcards - Concepts clés
  - QCM - Théories du droit administratif
  - Vrai ou Faux - Service public
  - Jurisprudence - Arrêts fondateurs
- Séance 2: Les sources constitutionnelles
  - Flashcards - Sources constitutionnelles
  - QCM - Contrôle de constitutionnalité

### Droit des Obligations
- Séance 1: Les négociations précontractuelles
  - Flashcards - Devoir d'information
  - QCM - Rupture des pourparlers
  - Vrai ou Faux - Devoir d'information
  - Jurisprudence - Négociations précontractuelles

## Améliorations possibles

- Ajouter un système de sauvegarde des progrès
- Implémenter un timer pour les exercices
- Ajouter des statistiques détaillées par matière
- Créer un mode "examen" avec des questions aléatoires
- Ajouter un système de favoris
- Intégrer un mode multijoueur

## Licence

Cette application est créée pour un usage personnel éducatif. Les données sont basées sur des cours universitaires de Licence 2 Droit.

## Auteur

Application créée par Vibe Code pour faciliter la révision des cours de droit.
