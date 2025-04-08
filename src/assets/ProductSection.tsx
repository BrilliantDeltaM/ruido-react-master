import React from 'react';
import { Link } from 'react-router-dom';
import { Product, ProductProps } from '../types/producs.ts';
import ProductCard from './ProductCard.tsx';
import { useNavigate } from 'react-router-dom';
import products from './producto.jsx';

const ProductSection: React.FC<ProductProps> = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-6 flex justify-center border-b">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-product.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className='text-gray-600 flex gap-1 mb-4'>
                <Link className='hover:text-black' to="/tienda/">Inicio</Link>
                <span>/</span>
                <Link className='hover:text-black' to={`/tienda/${product.category}`}>
                  {product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}
                </Link>
                <span>/</span>
                <span>{product.name}</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>

              <div className="flex flex-col my-auto">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition w-full"
                  aria-label={`Agregar ${product.name} al carrito`}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center py-6 border-b'>
        <h3 className='text-center'>Productos relacionados</h3>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 border-b'>
        {products
          .filter(p => p.category === product.category)
          .slice(0,4)
          .map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} onClick={() => navigate(`/tienda/${p.category}/${p.id}`)} />
          ))}
      </div>
    </>

  );
};

export default ProductSection;