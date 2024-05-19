"use client";
import Head from "next/head";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  interface CategoryItems {
    [key: string]: { name: string; price: string }[];
  }

  const categories: CategoryItems = {
    "SIN ALCOHOL": [
      { name: "VASO DE COCA", price: "1500" },
      { name: "AGUA", price: "2000" },
      { name: "SPEED XL", price: "3000" },
    ],
    CERVEZAS: [
      { name: "LATA BRAHMA", price: "3000" },
      { name: "CERVEZA CORONA", price: "5000" },
    ],
    TRAGOS: [
      { name: "FERNET BRANCA", price: "4000" },
      { name: "VODKA CON SPEED", price: "4000" },
      { name: "GIN GORDON", price: "4000" },
      { name: "DEMONJAG", price: "6000" },
      { name: "JAGGERMEISTER", price: "7000" },
      { name: "RED LABEL CON SPEED", price: "8000" },
    ],
    COMBOS: [
      { name: "CHANDON DELICE + SPEED XL", price: "23000" },
      { name: "SMIRNOFF + 2 SPEED XL ", price: "25000" },
      { name: "BARON B + SPEED XL", price: "30000" },
      { name: "GORDONS + 1 BOTELLA TONICA", price: "30000" },
    ],
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("sintetic")
      .then(() => {
        toast.success("ALIAS COPIADO");
      })
      .catch((err) => {
        toast.error("ERROR AL COPIAR: " + err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <Head>
          <title>Lista de Precios</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="text-center">
          <Image
            src="/SINTETIC_LOGO.png"
            alt="Sintetic Logo"
            className="mx-auto h-max w-max"
            width={150}
            height={150}
          />
          <h1 className="text-4xl font-bold">LISTA DE PRECIOS</h1>
          <button
            onClick={copyToClipboard}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            COPIAR ALIAS
          </button>
          <h3 className="mt-4 text-lg font-bold">ALIAS: sintetic</h3>
          <h4>COPIA EL ALIAS Y ABRE LA APLICACION DE MERCADOPAGO</h4>
          <div className="mt-8">
            {Object.keys(categories).map((category, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-lg text-gray-500">{category}</h2>
                {categories[category].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between w-full max-w-md mx-auto my-1"
                  >
                    <span className="text-left">{item.name}</span>
                    <span className="text-right">{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
