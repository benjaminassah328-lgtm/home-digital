"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  img: string;
  name: string;
};

const products: Product[] = [
  { id: 1, img: "/images/pc.jpeg", name: "Ordinateur" },
  { id: 2, img: "/images/clavier.jpeg", name: "Clavier" },
  { id: 3, img: "/images/casque.jpeg", name: "Casque" },
  { id: 4, img: "/images/sourishp.jpeg", name: "Souris" },
  { id: 5, img: "/images/m1.jpeg", name: "Macbook Pro" },
  { id: 6, img: "/images/manette1.jpeg", name: "Manette" },
  { id: 7, img: "/images/supportordi.jpeg", name: "Support PC" },
  { id: 8, img: "/images/ps4.jpeg", name: "PS4" },
];

export default function Products() {
  return (
    <section className="bg-linear-to-b from-black via-indigo-950 to-black py-14 px-4 overflow-hidden">
      <h2 className="text-white text-2xl md:text-3xl font-orbitron text-center mb-10">
        Nos Produits
      </h2>

      {/* CONTENEUR ANIMÉ */}
      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -600] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...products, ...products].map((product, index) => (
          <div
            key={index}
            className="min-w-62.5 bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center"
          >
            {/* IMAGE */}
            <div className="relative w-full h-40 overflow-hidden rounded-xl">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXTE */}
            <h3 className="text-white mt-4 font-semibold">
              {product.name}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
