# Exercices en Typescript (avec des tests)

Bonjour et bienvenue dans le cours Typescript.

Ce fichier README permet de comprendre comment fonctionne ce projet.

## Composition du projet

- package.json: regroupe les informations lié à NodeJS (les modules utilisés, et les scripts `npm run`)
- tsconfig.json: configuration de typescript
- jest.config.js: la configuration de jest, un framework de tests
- le dossier src: contenant les sources du projet

## Comment utiliser le projet

Pour compléter les exercices, vous devrez créer des fichiers nommés `exo1.ts`, `exo2.ts`, etc...
Vous retrouverez des informations sur `exoN.infos.md`

## Les tests

Afin de vous assurer que votre exercice est valide, lancez la commande suivante:
```
npm run test
```

Cela lancera les tests pour tous les exercices.

> Les tests ne peuvent pas être modifié

## Comment lancer uniquement le fichier exoN.ts

```bash
npm run dev:exo1
```
