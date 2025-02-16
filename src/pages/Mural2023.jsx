import Slider from '../assets/slider.jsx';

function Mural23() {
  const images = [
    './img/circuitomural23/1.webp',
    './img/circuitomural23/2.webp',
    './img/circuitomural23/3.webp',
    './img/circuitomural23/4.webp',
    './img/circuitomural23/5.webp',
    './img/circuitomural23/6.webp',
  ];

  return (
    <div className="flex justify-center items-center min-h-screen"> {/* Centrado horizontal y vertical */}
      <Slider images={images} />
    </div>
  );
}

export default Mural23;