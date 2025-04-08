import React, { memo } from 'react';
import { Product } from '../types/producs.ts';

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product, addToCart, onClick }) => {
    return (
        <div className='border border-gray-300 shadow-lg rounded-lg p-6 group relative'>
            <div className="" role='button' onClick={onClick}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110"
                    loading="lazy"
                />
                <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                <p className="text-2xl font-bold mt-2 text-black">${product.price}</p>
            </div>
            <button
                    onClick={() => addToCart(product)}
                    className="bg-fluorescentYellow text-black w-full py-3 mt-4 rounded-lg hover:bg-yellow-400 comprar md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100"
                >
                    Añadir al carrito
                </button>
        </div>

    );
});

export default ProductCard;