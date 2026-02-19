"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 font-orbitron">
        Services Informatiques
      </h1>
      <p className="text-purple-300 font-lora">
        Solutions complètes pour vos besoins technologiques
      </p>
    </motion.div>
  );
}
