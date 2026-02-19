"use client";

import { motion } from "framer-motion";
import { Software } from "./types";

interface Props {
  software: Software;
  isSelected: boolean;
  index: number;
  onToggle: (id: number) => void;
}

export default function SoftwareCard({
  software,
  isSelected,
  index,
  onToggle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group rounded-lg border-2 overflow-hidden transition-all ${
        isSelected
          ? "bg-purple-600 border-purple-300 shadow-lg shadow-purple-500"
          : "bg-linear-to-br from-gray-800 to-black border-purple-700 hover:border-purple-500"
      } ${software.stock === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={() => software.stock > 0 && onToggle(software.id)}
    >
      {/* Header avec icon et badge stock */}
      <div className="relative p-4 bg-linear-to-r from-purple-700 to-pink-700 group-hover:from-purple-600 group-hover:to-pink-600 transition">
        <div className="text-4xl mb-2">{software.icon}</div>

        {/* Badge Stock */}
        <div
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold ${
            software.stock > 20
              ? "bg-green-500"
              : software.stock > 0
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {software.stock > 0 ? `${software.stock} en stock` : "Rupture"}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Titre et éditeur */}
        <h3 className="font-bold text-lg mb-1 text-white group-hover:text-purple-300 transition">
          {software.name}
        </h3>
        <p className="text-xs text-gray-400 mb-3">
          Par <span className="text-purple-300">{software.publisher}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
          {software.description}
        </p>

        {/* Système */}
        <div className="text-xs text-gray-400 mb-3 pb-3 border-b border-purple-700/30">
          <span className="text-purple-300">OS:</span> {software.system}
        </div>

        {/* Features */}
        <div className="mb-3 max-h-16 overflow-y-auto">
          <p className="text-xs text-gray-400 font-semibold mb-2">
            Caractéristiques:
          </p>
          <ul className="text-xs text-gray-300 space-y-1">
            {software.features.slice(0, 3).map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
            {software.features.length > 3 && (
              <li className="text-purple-400">
                +{software.features.length - 3} autres
              </li>
            )}
          </ul>
        </div>

        {/* Avis */}
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-purple-700/30">
          <span className="text-yellow-400">⭐ {software.rating}</span>
          <span className="text-xs text-gray-400">({software.reviews} avis)</span>
        </div>

        {/* Licences disponibles */}
        <div className="mb-3">
          <p className="text-xs text-gray-400 font-semibold mb-1">Licences:</p>
          <div className="flex gap-1 flex-wrap">
            {software.licenses.map((license, idx) => (
              <span
                key={idx}
                className="text-xs bg-purple-800/50 px-2 py-1 rounded"
              >
                {license.type === "personnel" && "👤"}
                {license.type === "professionnel" && "💼"}
                {license.type === "entreprise" && "🏢"}
                {" "}
                {license.duration === "1_an"
                  ? "1 an"
                  : license.duration === "1_mois"
                  ? "1 mois"
                  : "Perpétuel"}
              </span>
            ))}
          </div>
        </div>

        {/* Prix et bouton */}
        <div className="pt-3 border-t border-purple-700/30">
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg font-bold text-purple-300">
              {software.priceFormatted}
            </span>
            <button
              className={`px-3 py-1 rounded text-sm font-bold transition ${
                isSelected
                  ? "bg-green-500 text-white"
                  : software.stock > 0
                  ? "bg-purple-500 hover:bg-purple-400 text-white"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
              disabled={software.stock === 0}
            >
              {isSelected ? "✓ Ajouté" : "Ajouter"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
