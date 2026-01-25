import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import Footer from "@/components/footer"
export default function Homepage(){

  return(
    <main className="min-h-screen flex flex-col bg-gray-950"> 
        
     
      <Hero/>
<Services/>
<Products/>
    </main>
  )
}