import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext.tsx";
import OptionsHolder from "./MenuOpciones.jsx";

interface CarritoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CarritoModal: React.FC<CarritoModalProps> = ({ isOpen, onClose }) => {
    const { carrito, cantidadTotal, dispatch } = useCarrito();
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    const valorTotal = carrito.reduce((total, producto) => {
        return total + producto.price * producto.quantity;
      }, 0);

    const generarMensaje = () => {
        const detalles = carrito
            .map(
                (producto) =>
                    `${producto.name} x${producto.quantity} - $${producto.price * producto.quantity}`
            )
            .join("\n");

        const metodoEnvio = opcionSeleccionada
            ? `\n\n*Método de envío:* ${opcionSeleccionada}`
            : "\n\n*Método de envío:* No seleccionado";

        return `*Detalles de la compra:*\n\n${detalles}\n\n*Total: $${valorTotal}*${metodoEnvio}`;
    };

    const crearLinkWhatsApp = () => {
        const mensaje = generarMensaje();
        const mensajeCodificado = encodeURIComponent(mensaje);
        return `https://wa.me/5493816061625?text=${mensajeCodificado}`;
    };

    const manejarContinuarClick = () => {
        const link = crearLinkWhatsApp();
        window.open(link, "_blank");
    };

    const opciones = [
        { value: "retiro", label: "Retiro en local" },
        { value: "envio", label: "Envío a domicilio" },
    ];

    const handleSelection = (selected: { label: string }) => {
        setOpcionSeleccionada(selected.label);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-end" onClick={onClose}>
            <div className="h-full md:w-2/5 w-full bg-white p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center mb-8 border-gray border-b py-4">Carrito de Compras</h2>
                {carrito.length === 0 ? (
                    <div>
                        <p className="text-center text-gray-600">El carrito está vacío.</p>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={onClose}
                                className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {carrito.map((producto) => (
                            <div key={producto.id} className="flex items-center space-x-4 border-b pb-4">
                                {/* Imagen del producto */}
                                <img
                                    src={producto.image}
                                    alt={producto.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                {/* Detalles del producto */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{producto.name}</h3>
                                    <p className="text-gray-600">${producto.price}</p>
                                </div>
                                {/* Contador de cantidad */}
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="flex items-center space-x-2 border border-gray">
                                        <button
                                            onClick={() => dispatch({ type: "decrementar", payload: producto.id })}
                                            className="px-3 py-1 text-black rounded"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{producto.quantity}</span>
                                        <button
                                            onClick={() => dispatch({ type: "incrementar", payload: producto.id })}
                                            className="px-3 py-1 text-black rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {/* Botón para eliminar el producto */}
                                    <button
                                        onClick={() => dispatch({ type: "eliminar", payload: producto.id })}
                                        className="px-3 py-1 text-black hover:text-gray-700 ml-auto"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Opciones de envío */}
                        <div className="mx-auto">
                            <h1 className="text-2xl font-bold mb-6">Medios de envío</h1>
                            <OptionsHolder options={opciones} onSelect={handleSelection} />
                        </div>

                        {/* Total del carrito */}
                        <div className="text-right text-xl font-bold">
                            Total: ${valorTotal}
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col space-y-1">
                            <button
                                onClick={manejarContinuarClick}
                                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                            >
                                Continuar
                            </button>
                            <button
                                onClick={onClose}
                                className="text-gray-700 px-6 py-2 rounded-lg hover:text-gray-800"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarritoModal;