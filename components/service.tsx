import { Van, MessageCircleReply, PiggyBank, Headset, } from "lucide-react";
import Link from "next/link";
export default function Services() {
  return (
    <section className="bg-linear-to-r from-indigo-900 via-purple-900 to-black py-12 px-4">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Livraison */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <Link href="/Livraison" className="flex justify-center mb-3">
            <Van className="w-10 h-10 text-violet-400" />
          </Link>
          <h2 className="font-semibold text-white">Livraison</h2>
          <p className="text-sm text-gray-300 mt-1">Livraison rapide</p>
        </div>

        {/* Retour */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <Link href="/Retour" className="flex justify-center mb-3">
            <MessageCircleReply className="w-10 h-10 text-violet-400" />
          </Link>
          <h2 className="font-semibold text-white">
            Politique de retour
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            Votre satisfaction, notre priorité
          </p>
        </div>

        {/* Services informatiques */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <Link href="/ServiceInformatique" className="flex justify-center mb-3">
            <PiggyBank className="w-10 h-10 text-violet-400" />
          </Link>
          <h2 className="font-semibold text-white">Services informatiques</h2>
          <p className="text-sm text-gray-300 mt-1">
            Installation de logiciels, configuration PC, optimisation & sécurité
          </p>
        </div>

        {/* Service client */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:scale-105 transition">
          <div className="flex justify-center mb-3">
            <div>
             <Link href="/Contact">
              <Headset className="w-10 h-10 text-violet-400" />
             </Link>
            </div>
          </div>
          <h2 className="font-semibold text-white">Service client</h2>
          <p className="text-sm text-gray-300 mt-1">
            Service client 24/7
          </p>
        </div>

      </div>
    </section>
  );
}
