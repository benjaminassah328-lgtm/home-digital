"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getTotalQuantite } from "@/components/Panier/Checkout"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [nbArticles, setNbArticles] = useState(0);
  useEffect(() => {
    const updatePanier = () => {
      setNbArticles(getTotalQuantite());
    };
   

    updatePanier();

    window.addEventListener("panier-update", updatePanier);

    return () => {
      window.removeEventListener("panier-update", updatePanier);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 md:px-10 py-4 text-sm text-black placeholder-black ">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logoHD.jpeg"
            alt="Home Digital"
            width={100}
            height={100}
            className="rounded-xl"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6 font-lora text-gray-900">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <Link href="/produits" className="hover:text-blue-600">Produits</Link>
          <Link href="/Contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/Panier" className="hover:text-blue-600">Panier</Link>
                    <Link href="/Apropos" className="hover:text-blue-600">A Propos</Link>

        </nav>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <Link href="/Panier" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />

            {nbArticles > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {nbArticles}
              </span>
              
            )}
          </Link>

          <Link href="/Contact">
            <User className="w-6 h-6 text-gray-700 hover:text-blue-600" />
          </Link>
        </div>

        {/* ACTIONS MOBILE */}
<div className="flex items-center gap-4 md:hidden">

  {/* Panier mobile VISIBLE */}
  <Link href="/Panier" className="relative">
    <ShoppingCart className="w-6 h-6 text-gray-700" />

    {nbArticles > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {nbArticles}
      </span>
    )}
  </Link>

  {/* Hamburger */}
  <button onClick={() => setOpen(!open)}>
    {open ? <X /> : <Menu />}
  </button>
</div>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 border-t pt-4">

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <nav className="flex flex-col gap-3 font-lora text-gray-900">
            <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/produits" onClick={() => setOpen(false)}>Produits</Link>
            <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/Panier" onClick={() => setOpen(false)}>Panier</Link>
                        <Link href="/Apropos" onClick={() => setOpen(false)}>A Propos</Link>

          </nav>

          <div className="flex gap-4 pt-2">
  <Link href="/Panier" className="relative">
    <ShoppingCart className="w-6 h-6 text-gray-700" />
    {nbArticles > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {nbArticles}
      </span>
    )}
  </Link>

  <Link href="/Contact">
    <User className="w-6 h-6 text-gray-700" />
  </Link>
</div>

        </div>
      )}
    </header>
  );
}
