"use client";

import Image from "next/image";
import { Produit } from "@/components/Panier/Checkout";
import { ajouterAuPanier } from "@/components/Panier/Checkout";

export default function Products() {
  const produits: Produit[] = [
    { id: 1, nom: "PC Bureau", prix: 10000, image: "/images/pc.jpeg" },
    { id: 2, nom: "Clavier", prix: 10000, image: "/images/clavier.jpeg" },
    { id: 3, nom: "Support Ordinateur", prix: 10000, image: "/images/supportordi.jpeg" },
    { id: 4, nom: "HP Laptop 1", prix: 280000, image: "/images/Hp1.jpeg" },
    { id: 5, nom: "HP Laptop 2", prix: 250000, image: "/images/Hp2.jpeg" },
    { id: 6, nom: "HP Laptop 3", prix: 190000, image: "/images/Hp3.jpeg" },
  ];

  return (
    <section className="px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {produits.map((p) => (
          <div
            key={p.id}
            className="p-4 rounded-lg text-center hover:scale-105 transition"
          >
            <Image
              src={p.image}
              alt={p.nom}
              width={250}
              height={250}
              className="rounded-2xl mx-auto"
            />

            <h3 className="mt-3 font-semibold">{p.nom}</h3>
            <p className="mt-1">{p.prix} F</p>

            <button
              onClick={() => ajouterAuPanier(p)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}