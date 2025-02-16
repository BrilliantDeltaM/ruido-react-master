import Slider from '../assets/slider';

function Mural24() {

  const images = [
    './img/circuitomural/1.webp',
    './img/circuitomural/2.webp',
    './img/circuitomural/3.webp',
    './img/circuitomural/4.webp',
    './img/circuitomural/5.webp',
    './img/circuitomural/6.webp',
    './img/circuitomural/7.webp',
    './img/circuitomural/8.webp',
    './img/circuitomural/9.webp',
    './img/circuitomural/10.webp',
    './img/circuitomural/11.webp',
    './img/circuitomural/12.webp',








  ];

    return (
      <div className="flex justify-center items-center min-h-screen"> {/* Centrado horizontal y vertical */}
      <Slider images={images} />
    </div>
    );
  }
  
export default Mural24;
  