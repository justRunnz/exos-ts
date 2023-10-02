# Exercice : Gestionnaire de Bibliothèque

## Contexte :
Vous travaillez pour une université qui souhaite digitaliser sa bibliothèque. Votre mission est de créer un petit système de gestion de bibliothèque en utilisant TypeScript.

## Instructions :

1. **Modélisation des Livres**  
   Créez une classe `Livre` avec les propriétés suivantes:
   - `titre`: string
   - `auteur`: string
   - `ISBN`: string
   - `nombreDePages`: number
   - `estEmprunte`: boolean

   Cette classe doit avoir une méthode `emprunter()` qui change la valeur de `estEmprunte` à `true` et une méthode `retourner()` qui change la valeur de `estEmprunte` à `false`.

2. **Gestionnaire de Bibliothèque**  
   Créez une classe `Bibliotheque` avec les propriétés suivantes:
   - `livres`: tableau de `Livre`

   Cette classe doit avoir les méthodes suivantes:
   - `ajouterLivre(livre: Livre)`: ajoute un livre à la bibliothèque.
   - `chercherParTitre(titre: string)`: renvoie un tableau de livres qui correspondent au titre donné.
   - `emprunterLivre(ISBN: string)`: permet d'emprunter un livre en utilisant son ISBN.
   - `retournerLivre(ISBN: string)`: permet de retourner un livre emprunté.

3. **Interface Utilisateur**  
   Créez une interface simple en utilisant `console.log` et `prompt` pour permettre à l'utilisateur d'ajouter des livres, de chercher des livres par titre, d'emprunter et de retourner des livres.

**Critères d'Évaluation :**

- Respect des principes de la Programmation Orientée Objet.
- Utilisation correcte des types en TypeScript.
- Gestion des erreurs (par exemple, emprunter un livre déjà emprunté).
- Clarté et propreté du code.

**Bonus :**  
- Ajoutez une classe `Etudiant` avec des propriétés comme `nom`, `numeroEtudiant`, etc. Modifiez le système pour qu'un livre sache quel étudiant l'a emprunté.
- Implémentez une fonctionnalité de recherche avancée qui permet de chercher des livres par auteur, nombre de pages, etc.

Bonne chance!
