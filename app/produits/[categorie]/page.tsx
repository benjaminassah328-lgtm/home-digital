
"use client"

import Header from "@/components/produits/header"
import ProduitCard from "@/components/produits/produitCard"
import { useParams } from "next/navigation"
import { produits } from "@/data/produits"

export default function Page() {
    const { categorie } = useParams()

    return (
        <section>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {produits.filter(p=> p.categorie.titre===categorie).map(p => (
                    <ProduitCard id={p.id} nom={p.nom} image={p.image} prix={p.prix} categorie={p.categorie} />
                ))}
            </div>
        </section>
    )
}