"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // ANIMATIONS FRAMER MOTION
  
  // Animation du titre principal
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.1 },
    },
  };

  // Animation du sous-titre
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  // Animation du bouton améliorée
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 20px 40px rgba(236, 72, 153, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  // Animation du fond (zoom lent et fluide)
  const backgroundVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.15,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  // Animation de l'overlay (pulse plus dynamique)
  const overlayVariants = {
    animate: {
      opacity: [0.50, 0.55, 0.45],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  

  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden rounded-3xl">
      
      
      {/* Image de fond avec zoom animation */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/new.jpeg"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Overlay sombre avec pulse animation */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        variants={overlayVariants}
        animate="animate"
      ></motion.div>

      {/* Contenu principal avec animations coordonnées */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Titre avec animation fade-in + slide-down */}
        <motion.h1
          className="text-white font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Bienvenue chez Home Digital
        </motion.h1>

        {/* Sous-titre avec animation fade-in + slide-down (délai) */}
        <motion.p
          className="text-gray-200 font-raleway mt-4 text-sm sm:text-base md:text-lg max-w-xl"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Découvrez le meilleur du digital avec Home Digital
        </motion.p>

        {/* Bouton avec animation scale + hover effect */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="mt-6"
        >
          <Link
            href="/produits"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition"
          >
            Découvrir nos produits
          </Link>
        </motion.div>

        

       
      </div>
    </section>
  );
}
