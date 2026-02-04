


"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ajouterAuPanier,
  Produit
} from "@/components/Panier/Checkout";

export default function Products() {

  const produits: Produit[] = [
    { id: 1, nom: "PC Bureau", prix: 10000, image: "/images/pc.jpeg" },
    { id: 2, nom: "Clavier", prix: 10000, image: "/images/clavier.jpeg" },
    { id: 3, nom: "Support Ordinateur", prix: 10000, image: "/images/supportordi.jpeg" },
    { id: 4, nom: "HP Laptop 1", prix: 280000, image: "/images/Hp1.jpeg" },
    { id: 5, nom: "HP Laptop 2", prix: 250000, image: "/images/Hp2.jpeg" },
    { id: 6, nom: "HP Laptop 3", prix: 190000, image: "/images/Hp3.jpeg" },
    { id: 7, nom: "Manette 1", prix: 20000, image: "/images/m1.jpeg" },
    { id: 8, nom: "Manette 2", prix: 20000, image: "/images/m2.jpeg" },
    { id: 9, nom: "Manette 5", prix: 20000, image: "/images/m5.jpeg" },

        { id: 10, nom: "Casque", prix: 190000, image: "/images/c1.jpeg" },
            { id: 11, nom: "Casque", prix: 190000, image: "/images/c2.jpeg" },
    { id: 12, nom: "casque", prix: 190000, image: "/images/c3.jpeg" },
        { id: 13, nom: "Airpod", prix: 190000, image: "/images/a1.jpeg" },
    { id: 14, nom: "Airpod", prix: 190000, image: "/images/a2.jpeg" },
    { id: 15, nom: "Airpod", prix: 190000, image: "/images/a3.jpeg" },
        { id: 16, nom: "PS3", prix: 190000, image: "/images/ps3.jpeg" },
    { id: 17, nom: "PS4", prix: 190000, image: "/images/ps4.jpeg" },
    { id: 18, nom: "PS5", prix: 190000, image: "/images/ps5.jpeg" },
        { id: 19, nom: "Dique Dur externe", prix: 20000, image: "/images/dis1.jpeg" },
        { id: 20, nom: "Dique Dur externe", prix: 20000, image: "/images/dis2.jpeg" },
    { id: 21, nom: "Dique Dur externe", prix: 20000, image: "/images/dis3.jpeg" },
        { id: 22, nom: "Clé USB 1", prix: 20000, image: "/images/clé1.jpeg" },
    { id: 23, nom: "Clé USB 2", prix: 20000, image: "/images/clé2.jpeg" },
    { id: 24, nom: "Clé USB 3", prix: 20000, image: "/images/clé3.jpeg" },

        

  ];

  // petit refresh pour re-render (badge header)
  const [, setRefresh] = useState(false);
  const refresh = () => setRefresh(v => !v);

  return (
    <section className="px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {produits.map((p) => (
          <div key={p.id} className="p-4 rounded-lg text-center hover:scale-105 transition">
            <Image
              src={p.image}
              alt={p.nom}
              width={250}
              height={250}
              className="rounded-4xl mx-auto"
            />

            <p className="font-lora mt-2">{p.prix} F</p>

            <button
              onClick={() => {
                ajouterAuPanier(p);
                refresh();
              }}
              className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-lg font-lora hover:text-violet-400 transition"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

