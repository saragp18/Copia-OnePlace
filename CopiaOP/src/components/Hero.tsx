import React from "react";

function HeroPage() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Imagen a la izquierda (más ancha) */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full">
        <img
          src="/img/WinterImage.avif"
          alt="Winter Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center bg-gray-100 text-center p-10">
        <h1 className="text-6xl font-bold text-gray-900">WINTER</h1>
        <h2 className="text-3xl font-light text-gray-800 mt-2">COLLECTION</h2>

        <button className="mt-8 px-8 py-3 border border-gray-400 rounded-full text-gray-800 hover:bg-gray-200 transition">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}

export default HeroPage;
