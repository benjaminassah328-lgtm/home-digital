import Image from "next/image";

const products = [
  { id: 1, img: "/images/pc.jpeg", name: "Ordinateur" },
  { id: 2, img: "/images/clavier.jpeg", name: "Clavier" },
  { id: 3, img: "/images/casque.jpeg", name: "Casque" },
  { id: 4, img: "/images/sourishp.jpeg", name: "Souris" },
  { id: 5, img: "/images/m1.jpeg", name: "Macbook Pro" },
  { id: 6, img: "/images/manette1.jpeg", name: "Manette" },
  { id: 7, img: "/images/supportordi.jpeg", name: "Support PC" },
  { id: 8, img: "/images/ps4.jpeg", name: "PS4" },
];

export default function Products() {
  return (
    <section className="bg-linear-to-b from-black via-indigo-950 to-black py-14 px-4">
      
      <h2 className="text-white text-2xl md:text-3xl font-orbitron text-center mb-10">
        Nos Produits
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-4 hover:scale-105 transition"
          >
            <div className="relative w-full h-48 overflow-hidden rounded-xl">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            </div>

            <h3 className="text-white text-center mt-4 font-semibold">
              {product.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}
