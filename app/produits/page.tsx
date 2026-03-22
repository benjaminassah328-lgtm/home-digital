import Header from "@/components/produits/header";
import { produits } from "@/data/produits";
import ProduitCard from "@/components/produits/produitCard";
export default function Page() {
    return (
        <main className="">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {produits.map(p => (
                    <ProduitCard id={p.id} nom={p.nom} image={p.image} prix={p.prix} categorie={p.categorie} />
                ))}
            </div>



        </main>
    )
}