"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Member = {
    name: string;
    role: string;
    image: string;
};

const team: Member[] = [
    {
        name: "Benjamin Assah",
        role: "Fondateur & CEO & developpeur fullstack",
        image: "/images/logo2.jpeg",
    },
    {
        name: "Diallo Alpha",
        role: "développeur Web",
        image: "/images/logo2.jpeg",
    },
    {
        name: "Baba Ashiru",
        role: "Développeur Web",
        image: "/images/logo2.jpeg",
    },
    {
        name: "Daniel Akéyé",
        role: "Développeur Web",
        image: "/images/logo2.jpeg",
    },
];

export default function Infos() {
    return (
        <section className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-6 ">
            <div className="max-w-5xl w-full text-center mt-2">
                <div className="flex flex-col-reverse justify-center items-center bg-white rounded-3xl ">
                    <Image
  src="/images/logonew.jpeg"
  alt="mon logo pour mon site de vente de produits électroniques Home Digital"
  width={100}
  height={100}
  className="rounded-xl w-full max-w-30 h-auto object-contain"
/>

                          <motion.h1
                    className="text-4xl font-bold text-violet-600 mb-6 text-center font-raleway    "
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    À propos de HomeDigital
                </motion.h1>
                </div>
                {/* Introduction */}
                

                <motion.p
                    className="text-lg text-gray-700 mb-10 font-lora"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    HomeDigital est votre partenaire de confiance pour les produits numériques à domicile.
                    Nous proposons une gamme variée d&apos;articles bureautiques, écouteurs et jeux vidéo,
                    conçus pour améliorer votre quotidien.
                </motion.p>
                <div className="flex justify-center items-center hadow hover:scale-105 transition bg-transparent  rounded-3xl mb-10">
                     <Image
                            src="/images/referenceHG2.jpeg"
                            alt="Home Digital"

                            width={500}
                            height={300}
                            className="rounded-xl"
                            
                          />
                </div>

                {/* Mission */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-6 mb-10"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-violet-600 mb-4">Notre Mission</h2>
                    <p className="text-gray-600 font-lora">
                        Rendre la technologie accessible, innovante et durable pour chaque foyer,
                        avec un service client irréprochable.
                    </p>
                </motion.div>

                {/* Valeurs */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-6 mb-12"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-violet-600 sm:text-violet-600 mb-6">Nos Valeurs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "🚀", title: "Innovation", text: "Toujours à la pointe." },
                            { icon: "💡", title: "Qualité", text: "Fiabilité et durabilité." },
                            { icon: "🤝", title: "Service Client", text: "Proche de vous." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl mb-2">{item.icon}</div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-gray-500 font-lora">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Histoire */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-6 mb-14"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold text-violet-600 mb-4">Notre Histoire</h2>
                    <p className="text-gray-600 font-lora mb-4">
                        Fondée en 2025, HomeDigital a commencé comme une boutique en ligne spécialisée
                        dans les gadgets domestiques.
                    </p>
                    <ul className="list-disc list-inside text-left text-gray-600 font-lora">
                        <li>2025 : Lancement de la plateforme</li>
                        <li>2026 : Expansion en cours</li>
                    </ul>
                </motion.div>

                {/* ÉQUIPE – SLIDER INFINI */}
                <motion.h2
                    className="text-2xl font-semibold text-violet-600 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Notre Équipe
                </motion.h2>

                <div className="overflow-hidden w-full mb-16">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [0, -300] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        {[...team, ...team].map((member, index) => (
                            <div
                                key={index}
                                className="min-w-55 bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center"
                            >
                                {/* IMAGE */}
                                <div className="relative w-20 h-20 mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>

                                {/* TEXTE */}
                                <h3 className="font-bold text-gray-900">{member.name}</h3>
                                <p className="text-gray-500 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Témoignages */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-6 mb-14"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold text-violet-600 mb-6">Témoignages Clients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "HomeDigital m'a offert des écouteurs de qualité exceptionnelle. Service rapide et fiable !"
                            </p>
                            <p className="text-gray-800 font-bold">- Marie L Assah., Nantes</p>
                        </motion.div>

                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les jeux vidéo sont top, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- Ange Elysée., Bouaké</p>
                        </motion.div>

                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les Ordinateur sont de bonne qualité, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- Kouakou Christian., Bouaké</p>
                        </motion.div>

                    <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les claviers sont de bonne qualité, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- Christ Stephane ., Botro</p>
                        </motion.div>

                         <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les claviers sont de bonne qualité, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- Christ Stephane ., Botro</p>
                        </motion.div>

                         <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les claviers sont de bonne qualité, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- Christ Stephane ., Botro</p>
                        </motion.div>

                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les claviers sont de bonne qualité, et la livraison a été impeccable. Je recommande ! Merci beaucoup"
                            </p>
                            <p className="text-gray-800 font-bold">- Christ Stephane ., Botro</p>
                        </motion.div>

                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <p className="text-gray-600 font-lora italic mb-2">
                                "Les claviers sont de bonne qualité, et la livraison a été impeccable. Je recommande !"
                            </p>
                            <p className="text-gray-800 font-bold">- OLibram ., Botro</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <a
                        href="/Contact"
                        className="bg-violet-600 text-white px-6 py-3 rounded-lg  hover:bg-violet-700 transition"
                    >
                        Contactez-nous
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
