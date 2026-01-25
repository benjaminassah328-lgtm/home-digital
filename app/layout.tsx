import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Lora, Raleway, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const pacifico = Pacifico({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "Home Digital",
  description: "Votre boutique en ligne pour l'électronique et les gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${lora.variable} ${raleway.variable} ${pacifico.variable} antialiased`}
      >

        <div className="w-full  top-0 z-50 bg-white ">
          <Header />
         
        </div>
        {children}
 <Footer />
      </body>
    </html>
  );
}
