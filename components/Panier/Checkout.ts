
export interface Produit {
    id: number;
    nom: string;
    prix: number;
    image: string;
}

export interface ProduitPanier extends Produit {
    quantite: number;
}

let panier: ProduitPanier[] = [];

export const getPanier = (): ProduitPanier[] => {
    return panier;
};

export const ajouterAuPanier = (produit: Produit) => {
    const existe = panier.find(item => item.id === produit.id);

    if (existe) {
        panier = panier.map(item =>
            item.id === produit.id
                ? { ...item, quantite: item.quantite + 1 }
                : item
        );
    } else {
        panier = [...panier, { ...produit, quantite: 1 }];
    }
    window.dispatchEvent(new Event("panier-update"));
};

export const changerQuantite = (id: number, qte: number) => {
    if (qte < 1) return;

    panier = panier.map(item =>
        item.id === id ? { ...item, quantite: qte } : item
    );
    window.dispatchEvent(new Event("panier-update"));
};

export const supprimerDuPanier = (id: number) => {
    panier = panier.filter(item => item.id !== id);
    window.dispatchEvent(new Event("panier-update"));
};

export const getTotal = (): number => {
    return panier.reduce(
        (somme, item) => somme + item.prix * item.quantite,
        0
    );
    
};

export const getTotalQuantite = (): number => {
    return panier.reduce(
        (total, item) => total + item.quantite,
        0
    );
};



