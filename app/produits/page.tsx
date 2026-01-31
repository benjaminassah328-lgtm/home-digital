import Header from "@/components/produits/header";
import ProduitsBureautiques from "@/components/bureautique/ProductsBureautiques";
import ProduitsCasque from "@/components/Ecouteur/Product2";
import ProduitsJeuxVideo from "@/components/Jeux_video/produits";
export default function Page(){
    return(
        <main className="">
            <Header />
              <ProduitsBureautiques/>
<ProduitsCasque/>
<ProduitsJeuxVideo/>



        </main>
    )
}