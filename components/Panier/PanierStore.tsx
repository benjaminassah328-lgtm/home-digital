"use client";

import { useState } from "react";
import {
  getPanier,
  changerQuantite,
  supprimerDuPanier,
  getTotal
} from "@/components/Panier/Checkout";

export default function PanierStore() {
  const [, setRefresh] = useState<boolean>(false);
  const refresh = () => setRefresh((v) => !v);

  const panier = getPanier();
  const total = getTotal();

  const envoyerWhatsApp = (): void => {
    if (panier.length === 0) return;

    let message = "🛒 Nouvelle Commande %0A%0A";

    panier.forEach((item) => {
      message += `• ${item.nom} x${item.quantite} - ${
        item.prix * item.quantite
      } F %0A`;
    });

    message += `%0A💰 Total : ${total} F`;

    const numero = "2250709294468"; 
    const url = `https://wa.me/${numero}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <section className="px-10 py-10 max-w-2xl mx-auto rounded-2xl bg-violet-600">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        🛒 Mon Panier
      </h2>

      {panier.length === 0 ? (
        <p className="text-white text-center">Panier vide</p>
      ) : (
        <>
          {panier.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4 text-white"
            >
              <div>
                <p className="font-semibold">{item.nom}</p>
                <p className="text-sm">{item.prix} F</p>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantite}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  changerQuantite(item.id, Number(e.target.value));
                  refresh();
                }}
                className="w-16 border px-2 text-black"
              />

              <button
                onClick={() => {
                  supprimerDuPanier(item.id);
                  refresh();
                }}
                className="text-red-300"
              >
                ❌
              </button>
            </div>
          ))}

          <h3 className="text-xl font-semibold mt-6 text-white">
            Total : {total} F
          </h3>

          <button
            onClick={envoyerWhatsApp}
            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold w-full"
          >
            Valider la commande sur WhatsApp
          </button>
        </>
      )}
    </section>
  );
}