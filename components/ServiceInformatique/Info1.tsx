"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ajouterAuPanier } from "@/components/Panier/Checkout";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

type Software = {
  id: number;
  name: string;
  price: string;
  category: string;
  icon: string;
  description: string;
  image?: string;
};

// ============================================================================
// DONNÉES STATIQUES
// ============================================================================

const services: Service[] = [
  {
    icon: "💿",
    title: "Vente de Logiciels",
    description:
      "Accédez à une large gamme de logiciels professionnels et personnels à prix compétitifs.",
    features: ["Licences authentiques", "Support technique", "Mises à jour gratuites"],
  },
  {
    icon: "📚",
    title: "Formations Informatiques",
    description:
      "Des formations adaptées à votre niveau pour maîtriser les technologies actuelles.",
    features: ["Cours en ligne", "Certificats reconnus", "Formateurs expérimentés"],
  },
  {
    icon: "🛠️",
    title: "Assistance Technique",
    description:
      "Support technique 24/7 pour résoudre tous vos problèmes informatiques.",
    features: ["Assistance rapide", "Experts disponibles", "Dépannage complet"],
  },
];

const softwares: Software[] = [
  { id: 1, name: "Microsoft Office 365", price: "99", category: "Bureau", icon: "📝", description: "Suite complète de productivité", image: "/images/office365.png" },
  { id: 2, name: "Adobe Creative Suite", price: "54.99", category: "Design", icon: "🎨", description: "Outils professionnels de création", image: "/images/adobe.png" },
  { id: 3, name: "Antivirus Norton", price: "49", category: "Sécurité", icon: "🛡️", description: "Protection maximale", image: "/images/norton.png" },
  { id: 4, name: "Visual Studio Code", price: "0", category: "Développement", icon: "💻", description: "Éditeur de code professionnel", image: "/images/vscode.png" },
];

// ============================================================================
// COMPOSANT PRINCIPAL
// ============================================================================

export default function Infos1() {
  // ---------- ÉTAT (State Management) ----------
  const [selectedSoftwares, setSelectedSoftwares] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [showCart, setShowCart] = useState(false);
  const [addedMessage, setAddedMessage] = useState<{ id: number; name: string } | null>(null);

  // ---------- CALCULS ET LOGIQUE ----------
  const categories = ["Tous", ...new Set(softwares.map((s) => s.category))];

  const filteredSoftwares =
    activeCategory === "Tous"
      ? softwares
      : softwares.filter((s) => s.category === activeCategory);

  const toggleSoftware = (id: number) => {
    const software = softwares.find((s) => s.id === id);
    if (software) {
      const produit = {
        id: software.id,
        nom: software.name,
        prix: parseFloat(software.price),
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
    return sum + (software ? parseFloat(software.price) : 0);
  }, 0);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ======================================================================== */}
        {/* SECTION 1: HERO (En-tête principal avec titre et description) */}
        {/* À extraire dans: components/ServiceInformatique/Hero.tsx */}
        {/* ======================================================================== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            Services Informatiques
          </h1>
          <p className="text-purple-300">
            Solutions complètes pour vos besoins technologiques
          </p>
        </motion.div>

        {/* ======================================================================== */}
        {/* SECTION 2: GRILLE DE SERVICES (Affichage des 6 services) */}
        {/* À extraire dans: components/ServiceInformatique/ServicesGrid.tsx */}
        {/* Créer aussi: components/ServiceInformatique/ServiceCard.tsx pour chaque carte */}
        {/* ======================================================================== */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/40 border border-purple-700 rounded-lg p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-3">{service.description}</p>
              <ul className="space-y-1 text-sm text-gray-400">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ======================================================================== */}
        {/* SECTION 3: TITRE DU CATALOGUE */}
        {/* À extraire dans: components/ServiceInformatique/CatalogTitle.tsx */}
        {/* ======================================================================== */}
        <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Catalogue de Logiciels
        </h2>

        {/* ======================================================================== */}
        {/* SECTION 4: FILTRES DE CATÉGORIES (Boutons de filtrage) */}
        {/* À extraire dans: components/ServiceInformatique/CategoryFilter.tsx */}
        {/* ======================================================================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-purple-600"
                  : "bg-purple-900/40 border border-purple-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ======================================================================== */}
        {/* SECTION 5: GRILLE DE LOGICIELS (Liste des logiciels à sélectionner) */}
        {/* À extraire dans: components/ServiceInformatique/SoftwareGrid.tsx */}
        {/* Créer aussi: components/ServiceInformatique/SoftwareCard.tsx pour chaque carte */}
        {/* ======================================================================== */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {filteredSoftwares.map((software) => (
            <div
              key={software.id}
              onClick={() => toggleSoftware(software.id)}
              className={`p-5 rounded-lg cursor-pointer border ${
                selectedSoftwares.includes(software.id)
                  ? "bg-purple-600 border-purple-300"
                  : "bg-black/50 border-purple-700"
              }`}
            >
              <div className="text-4xl mb-2">{software.icon}</div>
              <h3 className="font-bold">{software.name}</h3>
              <p className="text-sm text-gray-300 mb-2">
                {software.description}
              </p>
              <span className="text-purple-300 font-bold">
                {software.price === "0" ? "Gratuit" : software.price + "€"}
              </span>
            </div>
          ))}
        </div>

        {/* ======================================================================== */}
        {/* SECTION 6: BOUTON PANIER FLOTTANT (Bouton fixe en bas à droite) */}
        {/* À extraire dans: components/ServiceInformatique/CartButton.tsx */}
        {/* ======================================================================== */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-purple-600 px-6 py-3 rounded-full font-bold"
          >
            🛒 Panier ({selectedSoftwares.length})
          </button>
        </div>

        {/* ======================================================================== */}
        {/* SECTION 7: CONTENU DU PANIER (Affiche les articles sélectionnés) */}
        {/* À extraire dans: components/ServiceInformatique/CartDrawer.tsx */}
        {/* ======================================================================== */}
        {showCart && (
          <div className="fixed bottom-20 right-6 bg-black border border-purple-600 p-6 w-72 rounded-lg">
            <h3 className="font-bold mb-4 text-purple-400">Mon Panier</h3>

            {selectedSoftwares.length === 0 ? (
              <p className="text-gray-400">Aucun logiciel sélectionné</p>
            ) : (
              <>
                {selectedSoftwares.map((id) => {
                  const software = softwares.find((s) => s.id === id);
                  return (
                    <div key={id} className="flex justify-between mb-2">
                      <span>{software?.name}</span>
                      <span>{software?.price}€</span>
                    </div>
                  );
                })}
                <div className="border-t border-purple-700 mt-3 pt-3 font-bold">
                  Total: {selectedTotal.toFixed(2)}€
                </div>
              </>
            )}
          </div>
        )}

        {/* NOTIFICATION DE CONFIRMATION */}
        {addedMessage && (
          <motion.div
            className="fixed bottom-6 left-6 bg-green-600 text-white px-6 py-3 rounded-lg font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            ✓ {addedMessage.name} ajouté au panier
          </motion.div>
        )}
      </div>
    </main>
  );
}
