import { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login.tsx";
import CarritoModal from "./CarritoModal.tsx";

import {
  HiOutlineUserCircle,
  HiOutlineShoppingBag,
  HiBars3,
  HiChevronDown,
} from "react-icons/hi2";
import { useAuth } from "../context/AuthContext.tsx";
import { useCarrito } from "../context/CarritoContext.tsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { cantidadTotal } = useCarrito();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isTiendaHovered, setIsTiendaHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="bg-black text-white">
        <div className="py-2 font-saira-stencil mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="w-16 flex items-center">
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <HiBars3 className="w-6 h-6" />
              </button>
            </div>

            <div className="text-fluorescentYellow text-4xl text-center flex-grow flex justify-center">
              RUIDO
            </div>

            <div className="w-16 flex gap-4 items-center justify-end">
              <button
                className="hover:text-fluorescentYellow relative text-white text-2xl"
                onClick={() => setIsCartModalOpen(!isCartModalOpen)}
                aria-label="Ver carrito"
              >
                <HiOutlineShoppingBag className="w-6 h-6" />
                {cantidadTotal > 0 && (
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xs transform translate-y-1">
                {cantidadTotal}
              </span>
            )}
              </button>

              {user ? (
                <div className="relative group">
                  <button className="text-white text-2xl hover:text-fluorescentYellow">
                    <HiOutlineUserCircle />
                  </button>
                  <div className="absolute right-0 hidden group-hover:block bg-black p-2 rounded shadow-lg z-10">
                    <span className="text-white text-sm block mb-2 whitespace-nowrap">
                      {user.email}
                    </span>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition w-full text-sm"
                      onClick={signOut}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="text-white text-2xl hover:text-fluorescentYellow"
                  onClick={openLogin}
                  aria-label="Abrir inicio de sesión"
                >
                  <HiOutlineUserCircle />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto hidden md:flex justify-center items-center">
          <div className="flex justify-center space-x-8 items-center text-xl">
            <Link
              to="/"
              className="hover:text-fluorescentYellow transition-colors pb-2"
            >
              Inicio
            </Link>

            <div className="relative">
              <button
                className="hover:text-fluorescentYellow focus:outline-none flex items-center pb-2 gap-0.5 transition-colors"
                onMouseEnter={() => setIsTiendaHovered(true)}
                onMouseLeave={() => setIsTiendaHovered(false)}
              >
                Tienda
                <HiChevronDown className="text-sm" />
              </button>
            </div>

            <Link
              to="/murales"
              className="hover:text-fluorescentYellow transition-colors pb-2"
            >
              Murales
            </Link>
            <Link
              to="/eventos"
              className="hover:text-fluorescentYellow transition-colors pb-2"
            >
              Eventos
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black transition-all duration-300 ease-in-out">
            <Link
              to="/"
              className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <button
              className="flex w-full px-4 py-2 focus:outline-none items-center pb-2 gap-0.5 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Tienda
              <HiChevronDown className="text-sm" />
            </button>
            {isModalOpen && (
              <div className="px-2">
                              <Link
                to="/tienda/abanicos"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Abanicos
              </Link>
              <Link
                to="/tienda/remeras"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Remeras
              </Link>
              </div>

            )}

            <Link
              to="/murales"
              className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Murales
            </Link>
            <Link
              to="/eventos"
              className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </Link>
          </div>
        )}
      </nav>

      <Login isOpen={isLoginOpen} onClose={closeLogin} />
      <CarritoModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />

      {isTiendaHovered && (
        <div
          className="w-full bg-black text-white grid grid-cols-2 md:grid-cols-4 px-6 py-2"
          onMouseEnter={() => setIsTiendaHovered(true)}
          onMouseLeave={() => setIsTiendaHovered(false)}
        >
          <Link
            className="hover:text-fluorescentYellow  transition-colors"
            to={"/tienda/abanicos"}
          >
            Abanicos
          </Link>
          <Link
            className="hover:text-fluorescentYellow transition-colors"
            to={"/tienda/remeras"}
          >
            Remeras
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;