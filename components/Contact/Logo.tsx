"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-indigo-900 to-black px-4">
      
      {/* Carte avec effet glass */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6"
      >
        
        {/* Logo */}
        <div className="flex justify-center -mt-9">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <Image
  src="/images/logoHD.jpeg"
  alt="Home Digital"
  width={60}
  height={60}
  className="rounded-2xl w-full max-w-30 h-auto object-contain"
/>

          </div>
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-center mt-6 text-white font-orbitron">
          Assistance Home Digital
        </h1>

        <p className="text-center mt-2 text-gray-300 font-lora text-sm">
          Nous serions ravis de vous entendre !  
          Remplissez le formulaire ci-dessous.
        </p>

        {/* Formulaire */}
        <form className="mt-6 space-y-4">
          
          <div>
            <label className="block text-gray-200 mb-1">Nom</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Entrez Votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="exemple@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Message</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          {/* Bouton animé */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg font-semibold transition"
            type="submit"
          >
            Envoyer
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
