import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-screen
        bg-linear-to-l from-red-600 via-red-800 to-red-900
        pt-24
      "
    >
      <div
        className="
          h-full
          flex flex-col md:flex-row
          items-center
          justify-center
          px-10
        "
      >
        {/* Texte */}
        

        {/* Image */}
        <div
          className="
            md:w-1/2
            flex justify-center
            absolute md:static
            bottom-6
          "
        >
          <Image
            src="/images/amber.jpeg"
            alt="hamburger"
            width={420}
            height={420}
            className="rounded-full border-white border-2"
          />
        </div>
      </div>
    </section>
  );
}
