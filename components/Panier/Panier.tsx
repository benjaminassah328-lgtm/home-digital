


"use client";

import Image from "next/image";
import { useState } from "react";

/* 🔹 Types */
type Produit = {
  id: number;
  nom: string;
  prix: number;
  image: string;
};

type ProduitPanier = Produit & {
  quantite: number;
};

export default function Products() {
  const [panier, setPanier] = useState<ProduitPanier[]>([]);

  const produits: Produit[] = [
    { id: 1, nom: "PC Bureau", prix: 10000, image: "/images/pc.jpeg" },
    { id: 2, nom: "Clavier", prix: 10000, image: "/images/clavier.jpeg" },
    { id: 3, nom: "Support Ordinateur", prix: 10000, image: "/images/supportordi.jpeg" },
    { id: 4, nom: "HP Laptop 1", prix: 280000, image: "/images/Hp1.jpeg" },
    { id: 5, nom: "HP Laptop 2", prix: 250000, image: "/images/Hp2.jpeg" },
    { id: 6, nom: "HP Laptop 3", prix: 190000, image: "/images/Hp3.jpeg" },
        { id: 7, nom: "Casque", prix: 190000, image: "/images/c1.jpeg" },
            { id: 8, nom: "Casque", prix: 190000, image: "/images/c2.jpeg" },
    { id: 9, nom: "casque", prix: 190000, image: "/images/c3.jpeg" },
        { id: 10, nom: "Airpod", prix: 190000, image: "/images/a1.jpeg" },
    { id: 11, nom: "Airpod", prix: 190000, image: "/images/a2.jpeg" },
    { id: 12, nom: "Airpod", prix: 190000, image: "/images/a3.jpeg" },
            { id: 16, nom: "Manette", prix: 190000, image: "/images/ma1.jpeg" },
  { id: 16, nom: "Manette", prix: 190000, image: "/images/ma2.jpeg" },
    { id: 17, nom: "Manette", prix: 190000, image: "/images/ma3.jpeg" },
        { id: 13, nom: "PS3", prix: 190000, image: "/images/ps3.jpeg" },
    { id: 14, nom: "PS4", prix: 190000, image: "/images/ps4.jpeg" },
    { id: 15, nom: "PS5", prix: 190000, image: "/images/ps5.jpeg" },
      






  ];

  /* 🔹 Ajouter au panier */
  const ajouterAuPanier = (produit: Produit) => {
    const existe = panier.find((item) => item.id === produit.id);

    if (existe) {
      setPanier(
        panier.map((item) =>
          item.id === produit.id
            ? { ...item, quantite: item.quantite + 1 }
            : item
        )
      );
    } else {
      setPanier([...panier, { ...produit, quantite: 1 }]);
    }
  };

  /* 🔹 Modifier quantité */
  const changerQuantite = (id: number, qte: number) => {
    if (qte < 1) return;

    setPanier(
      panier.map((item) =>
        item.id === id ? { ...item, quantite: qte } : item
      )
    );
  };

  /* 🔹 Supprimer */
  const supprimer = (id: number) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  /* 🔹 Total */
  const total: number = panier.reduce(
    (somme, item) => somme + item.prix * item.quantite,
    0
  );

  return (
    <section className="px-10">

      {/* PRODUITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {produits.map((p) => (
          <div key={p.id} className="p-4 rounded-lg text-center">
            <Image
              src={p.image}
              alt={p.nom}
              width={250}
              height={250}
              className="rounded-4xl mx-auto"
            />

            <p className="font-lora mt-2">{p.prix} F</p>

            <button
              onClick={() => ajouterAuPanier(p)}
              className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-lg font-lora"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {/* PANIER */}
      <div className="mt-10 p-6 border-2  rounded-lg max-w-md mx-auto mb-10 ">
        <h2 className="text-2xl font-bold mb-4">🛒 Panier</h2>

        {panier.length === 0 ? (
          <p className="font-lora">Panier vide</p>
        ) : (
          panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <span>{item.nom}</span>
              <span>{item.prix} F</span>

              <input
                type="number"
                min={1}
                value={item.quantite}
                onChange={(e) =>
                  changerQuantite(item.id, Number(e.target.value))
                }
                className="w-16 border px-2"
              />

              <button
                onClick={() => supprimer(item.id)}
                className="text-red-600"
              >
                ❌ Supprimer
              </button>
            </div>
          ))
        )}

        <hr className="my-4" />

        <h3 className="text-xl font-semibold">
          Total : {total} F
        </h3>

        <button
          onClick={() => {
            alert(`Commande validée : ${total} F`);
            setPanier([]);
          }}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          Valider la commande
        </button>
      </div>
    </section>
  );
}
