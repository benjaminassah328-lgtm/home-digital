import Header from "@/components/produits/header";
import Products from "@/components/bureautique/Products";
import Products2 from "@/components/Ecouteur/Product2"
import  Produits from "@/components/Jeux_video/produits"
export default function Page(){
    return(
        <main className="">
            <Header />
<Products />
<Products2/>
<Produits/>

        </main>
    )
}