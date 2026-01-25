import Link from "next/link";

export default function ProductsNav() {
  return (
    <section className="bg-linear-to-r from-black via-gray-900 to-black rounded-xl my-10 mx-4 md:mx-10 px-6 py-4 font-lora">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Titre Produits */}
        <div className="text-white text-lg font-semibold">
          <Link href="/produits" className="hover:text-violet-400 transition">
            Produits
          </Link>
        </div>

        {/* Catégories */}
        <nav>
          <ul className="flex flex-wrap gap-4 text-sm md:text-base text-violet-400">
            <li>
              <Link
                href="/produits/Bureautique"
                className="hover:text-white transition"
              >
                Bureautique
              </Link>
            </li>
            <li>
              <Link
                href="/produits/Ecouteur"
                className="hover:text-white transition"
              >
                Écouteurs
              </Link>
            </li>
            <li>
              <Link
                href="/produits/Jeux_video"
                className="hover:text-white transition"
              >
                Jeux vidéo
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </section>
  );
}
