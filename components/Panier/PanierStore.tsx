"use client";

import { useState } from "react";
import {
  getPanier,
  changerQuantite,
  supprimerDuPanier,
  getTotal
} from "@/components/Panier/Checkout";

export default function PanierStore() {
  const [, setRefresh] = useState(false);
  const refresh = () => setRefresh(v => !v);

  const panier = getPanier();
  const total = getTotal();

  return (
    <section className="px-10 py-10 max-w-2xl mx-auto border-transparent rounded-2xl bg-linear-to-br from-blue-600 via-white to-red-600 ">
      <h2 className="text-3xl font-bold mb-6 flex justify-center font-lora ">🛒 Mon Panier</h2>

      {panier.length === 0 ? (
        <p className="font-raleway font-bold text-gray-700">Panier vide</p>
      ) : (
        <>
          {panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-semibold">{item.nom}</p>
                <p className="text-sm text-gray-600 font-lora">{item.prix} F</p>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantite}
                onChange={(e) => {
                  changerQuantite(item.id, Number(e.target.value));
                  refresh();
                }}
                className="w-16 border px-2 "
              />

              <button
                onClick={() => {
                  supprimerDuPanier(item.id);
                  refresh();
                }}
                className="text-red-600"
              >
                ❌
              </button>
            </div>
          ))}

          <h3 className="text-xl font-semibold mt-6 font-orbitron">
            Total : {total} F
          </h3>

          <button
            onClick={() => alert(`Commande validée : ${total} F`)}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-lora"
          >
            Valider la commande
          </button>
        </>
      )}
    </section>
  );
}
