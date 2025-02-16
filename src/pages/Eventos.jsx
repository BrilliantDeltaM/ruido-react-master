import React from 'react';
import EventList from '../assets/eventCard'; // Ajusta la ruta según tu estructura de carpetas

const EventosPage = () => {


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Eventos</h1>
      <EventList />
    </div>
  );
};

export default EventosPage;