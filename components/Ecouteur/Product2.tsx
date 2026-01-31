"use client";

import Image from "next/image";
import { useState } from "react";
import { ajouterAuPanier, Produit } from "@/components/Panier/Checkout";

export default function ProduitsCasque() {
  const produits: Produit[] = [
    { id: 10, nom: "Casque 1", prix: 280000, image: "/images/c1.jpeg" },
    { id: 11, nom: "Casque 2", prix: 250000, image: "/images/c2.jpeg" },
    { id: 12, nom: "Casque 3", prix: 190000, image: "/images/c3.jpeg" },

    { id: 13, nom: "AirPods 1", prix: 280000, image: "/images/a1.jpeg" },
    { id: 14, nom: "AirPods 2", prix: 250000, image: "/images/a2.jpeg" },
    { id: 15, nom: "AirPods 3", prix: 190000, image: "/images/a3.jpeg" },
        { id: 16, nom: "AirPods 4", prix: 190000, image: "/images/Airpods 4.jpeg" },    
                  { id: 17, nom: "AirPods 5", prix: 190000, image: "/images/Airpods 5.jpeg" },
                          { id: 18, nom: "AirPods 6", prix: 190000, image: "/images/Airpods 6.jpeg" },





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
            <p className="font-lora">{p.prix} F</p>

            <button
              onClick={() => {
                ajouterAuPanier(p);
                refresh();
              }}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
