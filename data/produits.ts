import { Categorie, categorieList } from "./categories";

export interface Produit {
    id: number;
    nom: string;
    prix: number;
    image: string;
    categorie: Categorie;
}

export const produits: Produit[] = [

    { id: 1, nom: "PC Bureau", prix: 10000, image: "/images/pc.jpeg", categorie: categorieList[0] },
    { id: 2, nom: "Clavier", prix: 10000, image: "/images/clavier.jpeg", categorie: categorieList[0] },
    { id: 3, nom: "Support Ordinateur", prix: 10000, image: "/images/supportordi.jpeg", categorie: categorieList[0] },

    { id: 4, nom: "Moniteur1", prix: 10000, image: "/images/Moniteur1.jpeg", categorie: categorieList[0] },
    { id: 5, nom: "Moniteur2", prix: 10000, image: "/images/Moniteur2.jpeg", categorie: categorieList[0] },
    { id: 6, nom: "Moniteur3", prix: 10000, image: "/images/Moniteur3.jpeg", categorie: categorieList[0] },

    { id: 7, nom: "Clavier lunineux1", prix: 10000, image: "/images/clavierlumineux1.jpeg", categorie: categorieList[0] },
    { id: 8, nom: "Clavier lunineux2", prix: 10000, image: "/images/clavierlumineux2.jpeg", categorie: categorieList[0] },
    { id: 9, nom: "Clavier lunineux3", prix: 10000, image: "/images/clavierlumineux3.jpeg", categorie: categorieList[0] },

    { id: 10, nom: "HP Laptop 1", prix: 280000, image: "/images/Hp1.jpeg", categorie: categorieList[0] },
    { id: 11, nom: "HP Laptop 2", prix: 250000, image: "/images/Hp2.jpeg", categorie: categorieList[0] },
    { id: 12, nom: "HP Laptop 3", prix: 190000, image: "/images/Hp3.jpeg", categorie: categorieList[0] },

    { id: 13, nom: "Disque Dur Externe 1", prix: 20000, image: "/images/dis1.jpeg", categorie: categorieList[0] },
    { id: 14, nom: "Disque Dur Externe 2", prix: 20000, image: "/images/dis2.jpeg", categorie: categorieList[0] },
    { id: 15, nom: "Disque Dur Externe 3", prix: 20000, image: "/images/dis3.jpeg", categorie: categorieList[0] },

    { id: 16, nom: "Clé USB 1", prix: 20000, image: "/images/clé1.jpeg", categorie: categorieList[0] },
    { id: 17, nom: "Clé USB 2", prix: 20000, image: "/images/clé2.jpeg", categorie: categorieList[0] },
    { id: 18, nom: "Clé USB 3", prix: 20000, image: "/images/clé3.jpeg", categorie: categorieList[0] },

    { id: 19, nom: "Projecteur 1", prix: 20000, image: "/images/Project1.jpeg", categorie: categorieList[0] },
    { id: 20, nom: "Projecteur 2", prix: 20000, image: "/images/Project2.jpeg", categorie: categorieList[0] },
    { id: 21, nom: "Projecteur 3", prix: 20000, image: "/images/Project3.jpeg", categorie: categorieList[0] },

    { id: 22, nom: "PlayStation 3", prix: 190000, image: "/images/ps3.jpeg", categorie: categorieList[1] },
    { id: 23, nom: "PlayStation 4", prix: 250000, image: "/images/ps4.jpeg", categorie: categorieList[1] },
    { id: 24, nom: "PlayStation 5", prix: 280000, image: "/images/ps5.jpeg", categorie: categorieList[1] },

    { id: 25, nom: "Manette 1", prix: 20000, image: "/images/ma1.jpeg", categorie: categorieList[1] },
    { id: 26, nom: "Manette 2", prix: 20000, image: "/images/ma2.jpeg", categorie: categorieList[1] },
    { id: 27, nom: "Manette 3", prix: 20000, image: "/images/ma3.jpeg", categorie: categorieList[1] },

    { id: 28, nom: "Chaise Gaming1", prix: 20000, image: "/images/chaise1.jpeg", categorie: categorieList[1] },
    { id: 29, nom: "Chaise Gaming2", prix: 20000, image: "/images/chaise2.jpeg", categorie: categorieList[1] },
    { id: 30, nom: "Chaise Gaming3", prix: 20000, image: "/images/chaise3.jpeg", categorie: categorieList[1] },

    { id: 31, nom: "Microphone Gamers1", prix: 300000, image: "/images/micro1.jpeg", categorie: categorieList[1] },
    { id: 32, nom: "Microphone Gamers2", prix: 300000, image: "/images/micro2.jpeg", categorie: categorieList[1] },
    { id: 33, nom: "Microphone Gamers3", prix: 300000, image: "/images/micro3.jpeg", categorie: categorieList[1] },

    { id: 34, nom: "AirPods Max (Silver)", prix: 350000, image: "/images/c1.jpeg", categorie: categorieList[2] },
    { id: 35, nom: "Beats Studio3", prix: 130000, image: "/images/c2.jpeg", categorie: categorieList[2] },
    { id: 36, nom: "Nothing Headphone", prix: 100000, image: "/images/c3.jpeg", categorie: categorieList[2] },

    { id: 37, nom: "AirPods Pro (2e Gen)", prix: 169900, image: "/images/a1.jpeg", categorie: categorieList[2] },
    { id: 38, nom: "AirPods Pro (Boîtier)", prix: 169900, image: "/images/a2.jpeg", categorie: categorieList[2] },
    { id: 39, nom: "AirPods Pro (Noir)", prix: 25000, image: "/images/a3.jpeg", categorie: categorieList[2] },

    { id: 40, nom: "AirPods Pro (Noir)", prix: 25000, image: "/images/Airpods 4.jpeg", categorie: categorieList[2] },
    { id: 41, nom: "TWS avec Écran LED", prix: 15000, image: "/images/Airpods 5.jpeg", categorie: categorieList[2] },
    { id: 42, nom: "M10 / F9 TWS", prix: 10000, image: "/images/Airpods 6.jpeg", categorie: categorieList[2] },

];