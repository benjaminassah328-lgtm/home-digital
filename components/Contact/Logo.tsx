"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [messageClient, setMessageClient] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Bonjour Home Digital,%0A%0A
Nom: ${nom}%0A 
Email: ${email}%0A
Message: ${messageClient}`;

    const url = `https://wa.me/2250709294468?text=${message}`;

    window.open(url, "_blank");

    // Réinitialiser le formulaire après envoi
    setNom("");
    setEmail("");
    setMessageClient("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-indigo-900 to-black px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6"
      >
        
        <div className="flex justify-center -mt-9">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <Image
              src="/images/logo2.jpeg"
              alt="Home Digital"
              width={100}
              height={100}
              className="rounded-2xl w-2xl max-w-30 h-auto object-contain"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mt-6 text-white font-orbitron">
          Assistance Home Digital
        </h1>

        <p className="text-center mt-2 text-gray-300 font-lora text-sm">
          Nous serions ravis de vous entendre !
          Remplissez le formulaire ci-dessous.
        </p>

        {/* Formulaire connecté à WhatsApp */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          
          <div>
            <label className="block text-gray-200 mb-1">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="exemple@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-1">Message</label>
            <textarea
              rows={3}
              value={messageClient}
              onChange={(e) => setMessageClient(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

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