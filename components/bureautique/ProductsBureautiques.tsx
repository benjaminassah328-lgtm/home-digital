"use client";

import Image from "next/image";
import { useState } from "react";
import { ajouterAuPanier, Produit } from "@/components/Panier/Checkout";

export default function ProduitsBureautique() {
  const produits: Produit[] = [
    { id: 1, nom: "PC Bureau", prix: 10000, image: "/images/pc.jpeg" },
    { id: 2, nom: "Clavier", prix: 10000, image: "/images/clavier.jpeg" },
    { id: 3, nom: "Support Ordinateur", prix: 10000, image: "/images/supportordi.jpeg" },

        { id: 13, nom: "Moniteur1", prix: 10000, image: "/images/Moniteur1.jpeg" },
    { id: 14, nom: "Moniteur2", prix: 10000, image: "/images/Moniteur2.jpeg" },
    { id: 15, nom: "Moniteur3", prix: 10000, image: "/images/Moniteur3.jpeg" },

    
    { id: 16, nom: "Clavier lunineux1", prix: 10000, image: "/images/clavierlumineux1.jpeg" },
    { id: 17, nom: "Clavier lunineux2", prix: 10000, image: "/images/clavierlumineux2.jpeg" },
    { id: 18, nom: "Clavier lunineux3", prix: 10000, image: "/images/clavierlumineux3.jpeg" },


    { id: 4, nom: "HP Laptop 1", prix: 280000, image: "/images/Hp1.jpeg" },
    { id: 5, nom: "HP Laptop 2", prix: 250000, image: "/images/Hp2.jpeg" },
    { id: 6, nom: "HP Laptop 3", prix: 190000, image: "/images/Hp3.jpeg" },

    { id: 7, nom: "Disque Dur Externe 1", prix: 20000, image: "/images/dis1.jpeg" },
    { id: 8, nom: "Disque Dur Externe 2", prix: 20000, image: "/images/dis2.jpeg" },
    { id: 9, nom: "Disque Dur Externe 3", prix: 20000, image: "/images/dis3.jpeg" },

    { id: 10, nom: "Clé USB 1", prix: 20000, image: "/images/clé1.jpeg" },
    { id: 11, nom: "Clé USB 2", prix: 20000, image: "/images/clé2.jpeg" },
    { id: 12, nom: "Clé USB 3", prix: 20000, image: "/images/clé3.jpeg" },  

    { id: 19, nom: "Projecteur 1", prix: 20000, image: "/images/Project1.jpeg" },  
    { id: 20, nom: "Projecteur 2", prix: 20000, image: "/images/Project2.jpeg" },  
    { id: 21, nom: "Projecteur 3", prix: 20000, image: "/images/Project3.jpeg" },

    
  ];

  const [, setRefresh] = useState(false);
  const refresh = () => setRefresh(v => !v);

  return (
    <section className="px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {produits.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow hover:scale-105 transition text-center">
            <Image src={p.image} alt={p.nom} width={250} height={250} className="rounded-xl mx-auto" />
            <h3 className="font-lora mt-2">{p.nom}</h3>
            <p className="font-lora md:text-black">{p.prix} F</p>

            <button
              onClick={() => {
                ajouterAuPanier(p);
                refresh();
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white sm:text-black rounded-lg"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
