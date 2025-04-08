import React, { useState } from 'react';

interface ImageSliderProps {
  imageUrls: string[];
  eventName?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls, eventName = "Evento" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (imageUrls.length === 0) {
    return <div className="text-center py-10">No hay imágenes disponibles</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{eventName}</h2>
      
      {/* Main Slider */}
      <div className="relative overflow-hidden bg-gray-900 rounded-lg mb-4">
        <div className="relative h-full max-h-[90vh] flex items-center justify-center">
          <img 
            src={imageUrls[currentImageIndex]} 
            alt={`Imagen ${currentImageIndex + 1} del ${eventName}`}
            className="object-contain h-full w-full"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPreviousImage}
            className="absolute left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label="Imagen anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNextImage}
            className="absolute right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label="Siguiente imagen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
            {currentImageIndex + 1} / {imageUrls.length}
          </div>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2 mt-2">
        {imageUrls.map((url, index) => (
          <div 
            key={index}
            onClick={() => goToImage(index)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden h-20 ${
              index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img 
              src={url} 
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
