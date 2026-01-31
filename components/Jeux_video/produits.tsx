"use client";

import Image from "next/image";
import { useState } from "react";
import { ajouterAuPanier, Produit } from "@/components/Panier/Checkout";

export default function ProduitsJeuxVideo() {
  const produits: Produit[] = [
    { id: 16, nom: "PlayStation 3", prix: 190000, image: "/images/ps3.jpeg" },
    { id: 17, nom: "PlayStation 4", prix: 250000, image: "/images/ps4.jpeg" },
    { id: 18, nom: "PlayStation 5", prix: 280000, image: "/images/ps5.jpeg" },

    { id: 19, nom: "Manette 1", prix: 20000, image: "/images/ma1.jpeg" },
    { id: 20, nom: "Manette 2", prix: 20000, image: "/images/ma2.jpeg" },
    { id: 21, nom: "Manette 3", prix: 20000, image: "/images/ma3.jpeg" },

        { id: 22, nom: "Chaise Gaming1", prix: 20000, image: "/images/chaise1.jpeg" },
    { id: 23, nom: "Chaise Gaming2", prix: 20000, image: "/images/chaise2.jpeg" },
    { id: 24, nom: "Chaise Gaming3", prix: 20000, image: "/images/chaise3.jpeg" },

    { id: 25, nom: "Microphone Gamers1", prix: 300000, image: "/images/micro1.jpeg" },
    { id: 26, nom: "Microphone Gamers2", prix: 300000, image: "/images/micro2.jpeg" },
    { id: 27, nom: "Microphone Gamers3", prix: 300000, image: "/images/micro3.jpeg" },

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
