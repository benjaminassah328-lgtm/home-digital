import Image from "next/image";

export default function Products() {
  return (
    <section className="py-10 px-4 md:px-10 space-y-12">

      {/* Ligne 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/pc.jpeg"
            alt="PC"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">10 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/clavier.jpeg"
            alt="Clavier"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">10 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/supportordi.jpeg"
            alt="Support ordinateur"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">10 000 F</p>
        </div>

      </div>

      {/* Ligne 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/Hp1.jpeg"
            alt="HP 1"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">280 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/Hp2.jpeg"
            alt="HP 2"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">250 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/Hp3.jpeg"
            alt="HP 3"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">190 000 F</p>
        </div>
</div>

{/* Ligne 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/m1.jpeg"
            alt="m 1"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">280 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/m2.jpeg"
            alt="m 2"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">250 000 F</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <Image
            src="/images/m5.jpeg"
            alt="m 5"
            width={250}
            height={250}
            className="rounded-xl mx-auto"
          />
          <p className="font-lora text-center mt-2">190 000 F</p>
        </div>
</div>


    </section>
  );
}
