"use client";

import { motion } from "framer-motion";
import { Van, MessageCircleReply, PiggyBank, Headset } from "lucide-react";
import Link from "next/link";

export default function Services() {
  // ANIMATIONS FRAMER MOTION

  // Animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation pour chaque carte de service
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  // Animation pour les icônes
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  // Animation du texte
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="bg-linear-to-r from-indigo-900 via-purple-900 to-black py-12 px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Livraison */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center group cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Link href="/Livraison" className="flex justify-center mb-3">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="group-hover:text-violet-300 transition-colors"
            >
              <Van className="w-10 h-10 text-violet-400" />
            </motion.div>
          </Link>
          <motion.h2
            className="font-semibold text-white"
            variants={textVariants}
          >
            Livraison
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300 mt-1"
            variants={textVariants}
          >
            Livraison rapide
          </motion.p>
        </motion.div>

        {/* Retour */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center group cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Link href="/Retour" className="flex justify-center mb-3">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="group-hover:text-violet-300 transition-colors"
            >
              <MessageCircleReply className="w-10 h-10 text-violet-400" />
            </motion.div>
          </Link>
          <motion.h2
            className="font-semibold text-white"
            variants={textVariants}
          >
            Politique de retour
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300 mt-1"
            variants={textVariants}
          >
            Votre satisfaction, notre priorité
          </motion.p>
        </motion.div>

        {/* Services informatiques */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center group cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Link href="/ServiceInformatique" className="flex justify-center mb-3">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="group-hover:text-violet-300 transition-colors"
            >
              <PiggyBank className="w-10 h-10 text-violet-400" />
            </motion.div>
          </Link>
          <motion.h2
            className="font-semibold text-white"
            variants={textVariants}
          >
            Services informatiques
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300 mt-1"
            variants={textVariants}
          >
            Installation de logiciels, configuration PC, optimisation & sécurité
          </motion.p>
        </motion.div>

        {/* Service client */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center group cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Link href="/Contact" className="flex justify-center mb-3">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="group-hover:text-violet-300 transition-colors"
            >
              <Headset className="w-10 h-10 text-violet-400" />
            </motion.div>
          </Link>
          <motion.h2
            className="font-semibold text-white"
            variants={textVariants}
          >
            Service client
          </motion.h2>
          <motion.p
            className="text-sm text-gray-300 mt-1"
            variants={textVariants}
          >
            Service client 24/7
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  );
}
