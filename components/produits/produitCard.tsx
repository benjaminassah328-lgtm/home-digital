"use client"

import Image from "next/image";
import Link from "next/link";
import { ajouterAuPanier,  } from "@/components/Panier/Checkout";
import { useState } from "react";
import { Produit,  } from "@/data/produits";



export default function ProduitCard({id,nom,image,prix,categorie}:Produit){

    const [, setRefresh] = useState(false);
      const refresh = () => setRefresh(v => !v);
    return(
        <div
  key={id}
  className="bg-white p-4 rounded-xl shadow hover:scale-105 transition text-center"
>
  <Link href={`/produits/details/${id}`}>
    <Image
      src={image}
      alt={nom}
      width={250}
      height={250}
      className="rounded-xl mx-auto"
    />
  </Link>

  <h3 className="font-lora mt-2">{nom}</h3>
  <p className="font-lora md:text-black">{prix} F</p>

  <button
    onClick={() => {
      ajouterAuPanier({id,nom,image,prix,categorie});
      refresh();
    }}
    className="mt-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
  >
    Ajouter au panier
  </button>

</div>
    )
}