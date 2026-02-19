"use client";

import { Software } from "./types";

interface Props {
  isOpen: boolean;
  selectedSoftwares: number[];
  softwares: Software[];
  total: number;
}

export default function CartDrawer({
  isOpen,
  selectedSoftwares,
  softwares,
  total,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 bg-linear-to-br from-gray-900 to-black border-2 border-purple-600 p-6 w-80 rounded-lg shadow-2xl shadow-purple-500/50 max-h-96 overflow-y-auto z-40">
      <h3 className="font-bold mb-4 text-purple-300 text-lg">🛒 Panier Local</h3>
      <p className="text-xs text-gray-400 mb-4 border-b border-purple-700 pb-3">
        (Les articles sont envoyés au panier principal)
      </p>

      {selectedSoftwares.length === 0 ? (
        <p className="text-gray-400 text-center py-4">Aucun logiciel sélectionné</p>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            {selectedSoftwares.map((id) => {
              const software = softwares.find((s) => s.id === id);
              return (
                <div
                  key={id}
                  className="flex items-center justify-between bg-purple-900/20 p-3 rounded border border-purple-700/30"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{software?.icon}</span>
                    <span className="text-sm font-semibold text-white truncate">
                      {software?.name}
                    </span>
                  </div>
                  <span className="text-purple-300 font-bold text-sm whitespace-nowrap">
                    {software?.priceFormatted}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-t-2 border-purple-600 pt-3 mt-3">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-300">Total:</span>
              <span className="text-xl font-bold text-purple-300">
                {total.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
            <p className="text-xs text-gray-400 border-t border-purple-700 pt-2">
              ✓ {selectedSoftwares.length} article
              {selectedSoftwares.length > 1 ? "s" : ""} en attente
            </p>
          </div>
        </>
      )}
    </div>
  );
}
