import React from 'react';
import { useParams } from 'react-router-dom';

function SeccionImagen() {
  const { id } = useParams();

  const descripciones = {
    1: " ",
    2: " ",
    3: " ",
    4: "Abrazo al monte es un homenaje a mi infancia perdida en el monte santiagueño y a mi abuela Rosa, que me enseñó a respetar y preservar la naturaleza. Inspirado también por los incendios en la provincia de Corrientes y para que en cada brasa del monte nazca un abrazo consciente y responsable de los recursos naturales.",
    6: " ",
    7: " ",
    8: " ",
    9: " ",
    10: " ",
    11: " ",
    12: " ",
    13: " ",
    14: " ",
    15: " ",
    16: " ",
    17: " ",
    18: " ",
    19: " ",
    20: " ",
    21: " ",
    22: " ",
    23: " ",
    24: " ",
  };

  const descripcion = descripciones[id] || "Descripción no disponible";

  // Ruta de la imagen basada en el `id`
  const imageSrc = `./img/murales/${id}.webp`;

  return (
    <div className="w-full min-h-screen p-8">
      {/* Contenedor de la imagen */}
      <div className="w-full h-[600px] md:aspect-video overflow-hidden rounded-lg shadow-lg">
        <img
          src={imageSrc}
          alt={""}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Contenedor de la descripción */}
      <div className="mt-8 max-w-2xl mx-auto">
        <p className="text-gray-800 text-lg md:text-xl font-medium text-center leading-relaxed">
          {descripcion}
        </p>
      </div>
    </div>
  );
}

export default SeccionImagen;