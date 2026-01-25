import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden rounded-3xl">
      
      {/* Image de fond */}
      <Image
        src="/images/new.jpeg"
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-white font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl">
          Bienvenue chez Home Digital
        </h1>

        <p className="text-gray-200 font-raleway mt-4 text-sm sm:text-base md:text-lg max-w-xl">
          Découvrez le meilleur du digital avec Home Digital
        </p>

        <Link
          href="/produits"
          className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition"
        >
          Découvrir nos produits
        </Link>
      </div>
    </section>
  );
}
