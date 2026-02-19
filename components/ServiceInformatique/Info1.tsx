"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ajouterAuPanier } from "@/components/Panier/Checkout";
import { useSoftwares } from "@/hooks/useSoftwares";
import { useServices } from "@/hooks/useServices";

// Imports des composants
import Hero from "./Hero";
import ServicesGrid from "./ServicesGrid";
import CatalogTitle from "./CatalogTitle";
import CategoryFilter from "./CategoryFilter";
import SoftwareGrid from "./SoftwareGrid";
import CartDrawer from "./CartDrawer";
import { Software, Service } from "./types";

export default function Infos1() {
  // Récupérer les données de MongoDB
  const { softwares, loading: softwaresLoading, error: softwaresError } = useSoftwares();
  const { services, loading: servicesLoading, error: servicesError } = useServices();

  // ---------- ÉTAT (State Management) ----------
  const [selectedSoftwares, setSelectedSoftwares] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [showCart, setShowCart] = useState(false);
  const [addedMessage, setAddedMessage] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  // Masquer le loading après 200ms
  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  // ---------- CALCULS ET LOGIQUE ----------
  const categories = ["Tous", ...new Set(softwares.map((s) => s.category))];

  const filteredSoftwares =
    activeCategory === "Tous"
      ? softwares
      : softwares.filter((s) => s.category === activeCategory);

  const toggleSoftware = (id: number) => {
    const software = softwares.find((s) => s.id === id);
    if (software && software.stock > 0) {
      const produit = {
        id: software.id,
        nom: software.name,
        prix: software.price,
        image: software.image || "/images/default.png",
      };
      ajouterAuPanier(produit);

      // Affiche une notification
      setAddedMessage({ id: software.id, name: software.name });
      setTimeout(() => setAddedMessage(null), 2000);
    }
    setSelectedSoftwares((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTotal = selectedSoftwares.reduce((sum, id) => {
    const software = softwares.find((s) => s.id === id);
    return sum + (software ? software.price : 0);
  }, 0);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Affichage rapide du loading (500ms) */}
        {showLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <motion.div
              className="text-center"
              animate={{ opacity: [0.5, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <div className="text-6xl mb-4">⚙️</div>
              <p className="text-xl text-purple-300">Chargement...</p>
            </motion.div>
          </div>
        )}
        
        {!showLoading && (
          <>
            {/* SECTION 1: HERO */}
            <Hero />

            {/* SECTION 2: GRILLE DE SERVICES */}
            <ServicesGrid services={services} />

            {/* SECTION 3: TITRE DU CATALOGUE */}
            <CatalogTitle />

            {/* SECTION 4: FILTRES DE CATÉGORIES */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* SECTION 5: GRILLE DE LOGICIELS */}
            <SoftwareGrid
              softwares={filteredSoftwares}
              selectedSoftwares={selectedSoftwares}
              onToggle={toggleSoftware}
            />

        {/* SECTION 6: BOUTON PANIER FLOTTANT */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-500 transition shadow-lg shadow-purple-500/50"
          >
            🛒 Panier ({selectedSoftwares.length})
          </button>
        </div>

        {/* SECTION 7: CONTENU DU PANIER */}
        <CartDrawer
          isOpen={showCart}
          selectedSoftwares={selectedSoftwares}
          softwares={softwares}
          total={selectedTotal}
        />

        {/* NOTIFICATION DE CONFIRMATION */}
        {addedMessage && (
          <motion.div
            className="fixed bottom-6 left-6 bg-green-600 text-white px-6 py-3 rounded-lg font-bold z-50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            ✓ {addedMessage.name} ajouté au panier
          </motion.div>
        )}
          </>
        )}
      </div>
    </main>
  );
}
