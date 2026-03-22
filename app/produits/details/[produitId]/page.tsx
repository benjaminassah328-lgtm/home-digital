"use client"

import Header from "@/components/produits/header"
import ProduitCard from "@/components/produits/produitCard"
import { produits } from "@/data/produits"
import { useParams } from "next/navigation"


export default function Page(){
    
    const { produitId } = useParams()
    const p= produits.find(p=>p.id===Number(produitId))
    if (!p) return <section></section>
    
    return(
 <section>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               <ProduitCard id={p.id} nom={p.nom} image={p.image} prix={p.prix} categorie={p.categorie} />
            </div>
        </section>
    )
}