import React, { useState, useCallback, useEffect } from 'react';

const Slider = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Cargar imágenes antes de mostrarlas
  useEffect(() => {
    if (images.length > 0) {
      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      };
      Promise.all(images.map(loadImage))
        .then(() => setImagesLoaded(true))
        .catch((error) => console.error('Error al cargar imágenes:', error));
    }
  }, [images]);

  // Función para navegar a la imagen anterior
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Función para navegar a la siguiente imagen
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  // Mensaje si no hay imágenes disponibles
  if (images.length === 0) {
    return <p className="text-center text-gray-500">No hay imágenes disponibles</p>;
  }

  // Mensaje mientras se cargan las imágenes
  if (!imagesLoaded) {
    return <p className="text-center text-gray-500">Cargando imágenes...</p>;
  }

  return (
    <div className="w-full h-[50%] mx-auto p-4 overflow-hidden">
      {/* Área principal del slider */}
      <div className="relative w-full h-[600px] sm:aspect-[21/9] sm:h-auto overflow-hidden rounded-lg">
        {/* Botón "Anterior" */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
          aria-label="Anterior"
        >
          &#10094;
        </button>

        {/* Imágenes del slider con transición de desvanecimiento */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Botón "Siguiente" */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
          aria-label="Siguiente"
        >
          &#10095;
        </button>
      </div>

      {/* Miniaturas */}
      <div className="sm:flex mt-4 space-x-2 w-full hidden">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            role="button"
            aria-label={`Seleccionar imagen ${index + 1}`}
            className={`w-32 h-16 rounded-lg overflow-hidden border-4 transition-transform duration-300 ${
              index === currentImageIndex ? ' scale-110' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;