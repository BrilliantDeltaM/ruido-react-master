import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const EventCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="max-w-lg rounded overflow-hidden shadow-lg bg-white block hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-90 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

const EventList = () => {
  const events = [
    {
      id: 1,
      image: "./img/circuitomural/1.webp",
      title: "Circuito del Mural",
      description: "",
      link: "circuito-mural", // Ruta a la página del evento
    },
    {
      id: 2,
      image: "./img/circuitomural23/3.webp",
      title: "Corte Circuito 2023",
      description: "Encuentro Internacional de Arte Urbano",
      link: "corte-circuito-2023", // Ruta a la página del evento
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          image={event.image}
          title={event.title}
          link={event.link} // Pasa la ruta como prop
        />
      ))}
    </div>
  );
};

export default EventList;