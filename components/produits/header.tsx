import Link from "next/link";

export default function ProductsNav() {
  return (
    <section className="bg-white my-10 mx-4 md:mx-10 px-6 py-4 font-lora  bg-cover bg-center bg-fixed shadow-lg rounded-lg " >
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
        
        {/* Titre Produits */}
        <div className="text-violet-400 text-lg font-semibold">
          <Link href="/produits" className="hover:text-violet-600 transition">
            Produits
          </Link>
        </div>

        {/* Catégories */}
        <nav>
          <ul className="flex flex-wrap gap-4 text-sm md:text-base text-gray-700">
            <li>
              <Link
                href="/produits/Bureautique"
                className="hover:text-violet-600 transition"
              >
                Bureautique
              </Link>
            </li>
            <li>
              <Link
                href="/produits/Ecouteur"
                className="hover:text-violet-600 transition"
              >
                Écouteurs
              </Link>
            </li>
            <li>
              <Link
                href="/produits/Jeux_video"
                className="hover:text-violet-600 transition"
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
