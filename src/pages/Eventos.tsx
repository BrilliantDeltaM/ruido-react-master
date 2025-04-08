import React from 'react';
import eventos from '../assets/eventos.ts';
import Slider from '../assets/Slider.tsx';
import { useNavigate, useParams } from 'react-router-dom';




const EventosPage = () => {
  const navigate = useNavigate();
  const {seccion} = useParams();

  if (seccion) {
    const eventId = typeof seccion === 'string' ? parseInt(seccion) : seccion;
    
    const evento = eventos.find((p) => p.id === eventId);
  
    if (!evento) {
      return (
        <div className="flex flex-col items-center justify-center h-64">
          <h3 className="text-xl font-semibold text-gray-700">Evento no encontrado</h3>
        </div>
      );
    }
  
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Slider imageUrls={evento.images} eventName={evento.title}/>;
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className='py-8'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center '>
          Eventos
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {eventos.map((evento) => (
          <div className="border border-gray-300 shadow-lg relative group  overflow-hidden aspect-[4/3]" role="button" onClick={() => navigate(`/eventos/${evento.id}`)}>
            <img src={evento.image} alt="" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50">{evento.title}</h3>
          </div>
        ))

        }
      </div>
    </div>
  );
};

export default EventosPage;