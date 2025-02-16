import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onCarritoClick, carritoCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Logo */}
      <div className="bg-black md:flex justify-between items-center pt-4 text-4xl text-fluorescentYellow font-saira-stencil mx-auto px-4 sm:px-6 lg:px-8 hidden">
        <div className="flex-1 text-center">RUIDO</div>
        <button
          className="hover:text-fluorescentYellow relative"
          onClick={onCarritoClick}
          aria-label="Ver carrito"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 448.47"
            width="24"
            height="24"
          >
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M16.37 33.11C7.33 33.11 0 25.78 0 16.75 0 7.71 7.33.38 16.37.38c18.05 0 46.68-1.81 64.84 2.51 24.1 5.76 39.36 21.75 45.89 45.77 1.37 5.87 2.79 11.74 4.23 17.61h364.3c9.04 0 16.37 7.33 16.37 16.37 0 1.77-.28 3.47-.8 5.06l-42.35 171.36c-1.83 7.45-8.51 12.44-15.86 12.43l-266.92.04c6.02 21.72 11.52 33.49 19.58 38.91 4.96 3.33 11.92 5.05 21.44 5.85 17.38 1.47 42.66.42 60.74.42h160.62c9.04 0 16.37 7.33 16.37 16.37 0 9.04-7.33 16.37-16.37 16.37H289.54c-21.3 0-49.26 1.21-69.61-1.14-12.95-1.49-23.31-4.62-32.44-10.76-17.35-11.65-26.5-31.46-35.7-67.91L95.52 57.23c-3.27-12.03-9.31-19.34-21.34-22.45-14.34-3.69-43.81-1.67-57.81-1.67zm383.71 335.34c22.1 0 40.01 17.91 40.01 40.01 0 22.1-17.91 40.01-40.01 40.01-22.09 0-40.01-17.91-40.01-40.01 0-22.1 17.92-40.01 40.01-40.01zm-175.41 0c22.1 0 40.01 17.91 40.01 40.01 0 22.1-17.91 40.01-40.01 40.01-22.1 0-40.01-17.91-40.01-40.01 0-22.1 17.91-40.01 40.01-40.01zM324.85 99.01v59.49h135.21l14.71-59.49H324.85zm0 92.22v47.56h115.37l11.75-47.56H324.85zm-32.74 47.56v-47.56H165.12c4.36 15.86 8.63 31.71 12.68 47.56h114.31zm0-80.29V99.01H139.73c5.26 19.82 10.78 39.65 16.31 59.49h136.07z"
            />
          </svg>
          <span
            id="carrito-count"
            aria-live="polite"
            className={`absolute -top-2 -right-2 bg-fluorescentYellow text-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full ${
              carritoCount === 0 ? "hidden" : ""
            }`}
          >
            {carritoCount}
          </span>
        </button>
      </div>

      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center relative">
            {/* Botón del menú para móviles */}
            <button
              id="menu-btn"
              aria-label="Abrir menú"
              aria-expanded={menuOpen} // Indica si el menú está abierto o cerrado
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Logo centrado en móviles */}
            <a
              href="#"
              className="text-2xl text-fluorescentYellow font-saira-stencil md:hidden absolute left-1/2 transform -translate-x-1/2"
            >
              RUIDO
            </a>

            {/* Links de navegación (ocultos en móviles) */}
            <div className="flex justify-center flex-1 space-x-8 items-center text-xl">
              <Link
                to="/"
                className="hidden md:block hover:text-fluorescentYellow"
              >
                Inicio
              </Link>
              <Link
                to="/tienda"
                className="hidden md:block hover:text-fluorescentYellow"
              >
                Tienda
              </Link>
              <Link
                to="/murales"
                className="hidden md:block hover:text-fluorescentYellow"
              >
                Murales
              </Link>
              <Link
                to="/eventos"
                className="hidden md:block hover:text-fluorescentYellow"
              >
                Eventos
              </Link>
            </div>

            {/* Carrito */}
            <button
              className="hover:text-fluorescentYellow relative md:hidden"
              onClick={onCarritoClick}
              aria-label="Ver carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 448.47"
                width="24"
                height="24"
              >
                <path
                  fill="#fff"
                  fillRule="nonzero"
                  d="M16.37 33.11C7.33 33.11 0 25.78 0 16.75 0 7.71 7.33.38 16.37.38c18.05 0 46.68-1.81 64.84 2.51 24.1 5.76 39.36 21.75 45.89 45.77 1.37 5.87 2.79 11.74 4.23 17.61h364.3c9.04 0 16.37 7.33 16.37 16.37 0 1.77-.28 3.47-.8 5.06l-42.35 171.36c-1.83 7.45-8.51 12.44-15.86 12.43l-266.92.04c6.02 21.72 11.52 33.49 19.58 38.91 4.96 3.33 11.92 5.05 21.44 5.85 17.38 1.47 42.66.42 60.74.42h160.62c9.04 0 16.37 7.33 16.37 16.37 0 9.04-7.33 16.37-16.37 16.37H289.54c-21.3 0-49.26 1.21-69.61-1.14-12.95-1.49-23.31-4.62-32.44-10.76-17.35-11.65-26.5-31.46-35.7-67.91L95.52 57.23c-3.27-12.03-9.31-19.34-21.34-22.45-14.34-3.69-43.81-1.67-57.81-1.67zm383.71 335.34c22.1 0 40.01 17.91 40.01 40.01 0 22.1-17.91 40.01-40.01 40.01-22.09 0-40.01-17.91-40.01-40.01 0-22.1 17.92-40.01 40.01-40.01zm-175.41 0c22.1 0 40.01 17.91 40.01 40.01 0 22.1-17.91 40.01-40.01 40.01-22.1 0-40.01-17.91-40.01-40.01 0-22.1 17.91-40.01 40.01-40.01zM324.85 99.01v59.49h135.21l14.71-59.49H324.85zm0 92.22v47.56h115.37l11.75-47.56H324.85zm-32.74 47.56v-47.56H165.12c4.36 15.86 8.63 31.71 12.68 47.56h114.31zm0-80.29V99.01H139.73c5.26 19.82 10.78 39.65 16.31 59.49h136.07z"
                />
              </svg>
              <span
                id="carrito-count"
                aria-live="polite"
                className={`absolute -top-2 -right-2 bg-fluorescentYellow text-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full ${
                  carritoCount === 0 ? "hidden" : ""
                }`}
              >
                {carritoCount}
              </span>
            </button>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <div className="md:hidden bg-black transition-all duration-300 ease-in-out">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black w-full"
                onClick={closeMenu} // Cierra el menú al hacer clic
              >
                Inicio
              </Link>
              <Link
                to="/tienda"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black w-full"
                onClick={closeMenu} // Cierra el menú al hacer clic
              >
                Tienda
              </Link>
              <Link
                to="/murales"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black w-full"
                onClick={closeMenu} // Cierra el menú al hacer clic
              >
                Murales
              </Link>
              <Link
                to="/eventos"
                className="block px-4 py-2 text-white hover:bg-fluorescentYellow hover:text-black w-full"
                onClick={closeMenu} // Cierra el menú al hacer clic
              >
                Eventos
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;