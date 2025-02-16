import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative bg-black text-white min-h-dvh overflow-hidden">
      {/* GIF de fondo */}
      <img
        src="./img/intro3.gif"
        alt="Fondo animado"
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center object-[center_top] z-0"
      />

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-60 sm:bg-opacity-50 z-10"></div>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-7xl font-bold text-fluorescentYellow mb-6 sm:mb-8">
            RUIDO: Arte Urbano y Muralismo
          </h1>

          <p className="text-lg sm:text-2xl text-white leading-relaxed mb-6 sm:mb-8">
            Ruido es un colectivo artístico formado por Verónica Corrales y Fernando Gallucci,
            dedicado al muralismo y al arte urbano en el noroeste argentino. Desde 2020, hemos
            realizado más de 100 murales de diversas escalas, utilizando el "ruido" como herramienta
            discursiva para generar mensajes que interpelan a la sociedad e intervienen en la
            realidad cotidiana.
          </p>

          <p className="text-lg sm:text-2xl text-white leading-relaxed mb-10 sm:mb-12">
            Creamos el <span className="font-bold">Circuito del Mural</span>, un proyecto declarado
            de interés cultural y municipal, que propone un circuito turístico alternativo mediante
            murales que embellecen espacios urbanos y promueven la participación activa de las
            comunidades. Actualmente, organizamos el{' '}
            <span className="font-bold">Circuito Mural Festival de Arte Urbano 2024</span>, un
            encuentro internacional que busca fortalecer el intercambio creativo y el impacto
            cultural en la región.
          </p>

          <Link
            to="/tienda"
            className="inline-block bg-fluorescentYellow text-black font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-lg sm:text-xl hover:bg-yellow-400 transition duration-300"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;