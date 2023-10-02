var promptSync = require("prompt-sync")();

class Livre {
    titre: string;
    auteur: string;
    ISBN: string;
    nbPages: number;
    estEmprunte: boolean;

    constructor(
        titre: string,
        auteur: string,
        ISBN: string,
        nbPages: number,
        estEmprunte: boolean
    ) {
        this.titre = titre;
        this.auteur = auteur;
        this.ISBN = ISBN;
        this.nbPages = nbPages;
        this.estEmprunte = estEmprunte;
    }

    emprunter(): void {
        this.estEmprunte = true;
    }

    rendre(): void {
        this.estEmprunte = false;
    }

    estEmpruntable(): boolean {
        return !this.estEmprunte;
    }
}

class Bibliotheque {
    livres: Livre[] = [];

    constructor() {}

    ajouterLivre(livre: Livre): void {
        this.livres.push(livre);
    }

    chercherParTitre(titre: string): Livre[] {
        return this.livres.filter((livre) => livre.titre === titre);
    }

    emprunterLivre(ISBN: string): void {
        const livre = this.livres.find((livre) => livre.ISBN === ISBN);
        if (livre && livre.estEmpruntable()) {
            livre.emprunter();
        }
    }

    retournerLivre(ISBN: string): void {
        const livre = this.livres.find((livre) => livre.ISBN === ISBN);
        if (livre) {
            livre.rendre();
        }
    }

    listerLivres(): Livre[] {
        return this.livres;
    }
}

const bibliotheque = new Bibliotheque();
const n = promptSync(
    "Que voulez-vous faire ?\n 1. Ajouter un livre\n 2. Chercher un livre par son titre\n 3. Emprunter un livre\n 4. Retourner un livre\n 5. Lister les livres\n 6. Quitter\n"
);

while (true) {
    switch (n) {
        case "1":
            // Add a book
            const titre = promptSync("Titre du livre: ");
            const auteur = promptSync("Auteur du livre: ");
            const ISBN = promptSync("ISBN du livre: ");
            const nbPages = parseInt(promptSync("Nombre de pages: "));
            const estEmprunte = false; // Initially, the book is not borrowed
            const newLivre = new Livre(
                titre,
                auteur,
                ISBN,
                nbPages,
                estEmprunte
            );
            bibliotheque.ajouterLivre(newLivre);
            console.log("Livre ajouté avec succès.");
            break;

        case "2":
            // Search for a book by title
            const searchTitre = promptSync("Titre du livre à chercher: ");
            const foundLivres = bibliotheque.chercherParTitre(searchTitre);
            if (foundLivres.length > 0) {
                console.log("Livres trouvés:");
                foundLivres.forEach((livre) => {
                    console.log(
                        `- Titre: ${livre.titre}, Auteur: ${livre.auteur}, ISBN: ${livre.ISBN}`
                    );
                });
            } else {
                console.log("Aucun livre trouvé avec ce titre.");
            }
            break;

        case "3":
            // Borrow a book
            const empruntISBN = promptSync("ISBN du livre à emprunter: ");
            bibliotheque.emprunterLivre(empruntISBN);
            console.log("Livre emprunté avec succès.");
            break;

        case "4":
            // Return a book
            const retourISBN = promptSync("ISBN du livre à retourner: ");
            bibliotheque.retournerLivre(retourISBN);
            console.log("Livre retourné avec succès.");
            break;

        case "5":
            // List all books
            const allLivres = bibliotheque.listerLivres();
            console.log("Liste de tous les livres dans la bibliothèque:");
            allLivres.forEach((livre) => {
                console.log(
                    `- Titre: ${livre.titre}, Auteur: ${livre.auteur}, ISBN: ${livre.ISBN}`
                );
            });
            break;

        case "6":
            // Quit the program
            console.log("Programme terminé.");
            process.exit();

        default:
            console.log(
                "Choix non valide. Veuillez choisir une option valide."
            );
            break;
    }
}
