## Trier un objet

Dans ce petit exercice, l'objectif va être de trier un objet contenant des clé qui représentes des dates.

La fonction doit être exportée du fichier exo2.ts et possède la signature suivante:
```ts
function sortByDate(obj: Obj, desc = false): Subject[] {}
```

Le paramètre desc, optionel avec une valeur false par défaut doit permettre de trier les dates de la plus petite à la plus grande et inversément.

Voici les types:
```ts
interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}
```

Chaque Subject se trouvant dans le tableau final doit contenir la propriété `created_at`.
