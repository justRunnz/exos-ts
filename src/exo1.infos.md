# Exo 01 - Résumé d'un utilisateur

Voici un petit exercice en TypeScript qui utilise un appel API pour récupérer des données de l'utilisateur à partir d'une API fictive, puis transforme ces informations pour en sortir un résumé.

## Infos utiles

Le fichier exo1.ts doit exporter une fonction nommée `getUserSummary`.

Cette fonction fera un appel sur une API et devra renvoyée une chaine de caractère contenant les infos de l'utilisateur dans ce format:

```
John Doe (john) - john.doe@example.com
```

Si aucun utilisateur n'est trouvé, vous devez renvoyez une Erreur "User not found"

### URL de l'API
```js
`https://jsonplaceholder.typicode.com/users/${userId}`
```
