import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-darkGray text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenedor principal con diseño flexible */}
                <div className="flex flex-col space-y-8 sm:flex-row sm:justify-between sm:items-start sm:space-y-0">
                    {/* Apartado de contacto */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                        <p className="text-lightGray text-sm">
                            Email: veronicacrrls@gmail.com
                        </p>
                        <p className="text-lightGray text-sm">
                            Teléfono: +54 9 3816 06-1625
                        </p>
                    </div>

                    {/* Apartado de redes sociales */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold mb-2">Redes Sociales</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {/* Enlace de Instagram */}
                            <a
                                href="https://www.instagram.com/vero_corrales"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lightGray hover:text-white transition duration-300"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                            </a>

                            {/* Enlace de TikTok */}
                            <a
                                href="https://www.tiktok.com/@circuitoruido"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lightGray hover:text-white transition duration-300"
                            >
                                <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Texto de derechos reservados */}
                    <div className="text-center sm:text-left">
                        <p className="text-lightGray text-sm">
                            &copy; {new Date().getFullYear()} Powered by Osiris.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;