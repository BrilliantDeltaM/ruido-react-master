import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Carrito from './carrito.jsx';

const Layout = () => {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const toggleCarrito = () => {
    if (carritoVisible) {
      setIsAnimating(true);
      setTimeout(() => {
        setCarritoVisible(false);
        setIsAnimating(false);
      }, 300);
      document.body.style.overflow = 'auto'; // Habilitar scroll
    } else {
      setCarritoVisible(true);
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll
    }
  };

  const carritoCount = carrito.reduce((total, product) => total + product.quantity, 0);

  return (
    <div>
      <Navbar carritoCount={carritoCount} onCarritoClick={toggleCarrito} />
      <main className="min-h-screen">
        <Outlet context={{ carrito, setCarrito }} />
      </main>
      <Footer />
      {carritoVisible && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleCarrito}
          ></div>
          <div
            className={`fixed right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-lg z-50 overflow-y-auto transform ${
              isAnimating ? 'animate-slideOut' : 'animate-slideIn'
            }`}
          >
            <Carrito carrito={carrito} setCarrito={setCarrito} onVolverClick={toggleCarrito} />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
