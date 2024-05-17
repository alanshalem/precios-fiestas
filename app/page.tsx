"use client";
import Head from "next/head";
import Image from "next/image";

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
    CERVEZAS: [{ name: "LATA BRAHMA", price: "3000" }],
    TRAGOS: [
      { name: "FERNET BRANCA", price: "4000" },
      { name: "VODKA CON SPEED", price: "4000" },
      { name: "GIN GORDON", price: "4000" },
      { name: "DEMONJAG", price: "6000" },
    ],
    COMBOS: [
      { name: "GORDONS + 1 BOTELLA TONICA", price: "30000" },
      { name: "SMIRNOFF + 2 SPEED XL ", price: "25000" },
    ],
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("sintetic")
      .then(() => {
        alert("Texto copiado al portapapeles: sintetic");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
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
            Copiar alias (sintetic)
          </button>
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
    </main>
  );
}
