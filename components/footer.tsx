import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-black via-gray-900 to-gray-800 text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Liens utiles */}
        <div>
          <h3 className="text-lg font-semibold font-lora mb-4">
            Liens utiles
          </h3>
          <ul className="space-y-2 text-sm font-lora text-gray-300">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/produits" className="hover:text-white">Produits</Link></li>
            <li><Link href="/Contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/Panier" className="hover:text-white">Panier</Link></li>
                        <li><Link href="/Apropos" className="hover:text-white">A Propos</Link></li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold font-lora mb-4">
            Contactez-nous
          </h3>
          <ul className="text-sm font-lora text-gray-300 space-y-2">
            <li>Email : benjaminassah328@gmail.com</li>
            <li>Téléphone : +225 07 08 66 57 82</li>
            <li>Adresse : Cocody Faya, Abidjan, CI</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold font-lora mb-4">
            Nos services
          </h3>
          <ul className="text-sm font-lora text-gray-300 space-y-2">
            <li>Livraison rapide et fiable</li>
            <li>Politique de retour facile</li>
            <li>Support client 24/7</li>
            <li>Produits de qualité garantie</li>
          </ul>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com" target="_blank" className="hover:text-white">
              <FaTiktok />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* À propos */}
        <div>
          <h3 className="text-lg font-semibold font-lora mb-4">
            À propos de Home Digital
          </h3>
          <p className="text-sm font-lora text-gray-300 leading-relaxed">
            Home Digital est votre destination de confiance pour les produits
            électroniques de qualité. Nous nous engageons à offrir les meilleurs
            produits et services à nos clients.
          </p>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-gray-700 py-6">
        <p className="text-center text-sm font-lora text-gray-400">
          © 2026 Home Digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
