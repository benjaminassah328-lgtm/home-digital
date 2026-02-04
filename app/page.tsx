import Header from "@/components/header"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Services from "@/components/service"
export default function Homepage(){

  return(
    <main className="min-h-screen flex flex-col bg-gray-950"> 
        
     
      <Hero/>
<Services/>
<Products/>
    </main>
  )
}