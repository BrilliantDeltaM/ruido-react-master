import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import ProductCard from '../assets/ProductCard.tsx';
import products from '../assets/producto';
import { useParams } from 'react-router-dom';
import CategoryCard from '../assets/CategoryCard';
import ProductSection from '../assets/ProductSection';
import { Product } from '../types/producs';

type SectionType = 'inicio' | 'abanicos' | 'remeras';

const Tienda: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>('inicio');
  const { dispatch } = useCarrito();
  const { categoria, producto } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentSection(categoria ? (categoria as SectionType) : 'inicio');
  }, [categoria]);

  const addToCart = (product: Product) => {
    dispatch({
      type: "agregar",  
      payload: { ...product, quantity: 1 },
    });
  };

  const highlightedProducts = () => {
    const categoryCounts = {};
    return products.filter(product => {
      if(!categoryCounts[product.category]) {
        categoryCounts[product.category] = 0
      }
      categoryCounts[product.category]++;
      return categoryCounts[product.category] <=3;
    }

    )
  }

  const filteredProducts = highlightedProducts();


  if (producto) {
    const productId = parseInt(producto);
    const product = products.find(p => p.id === productId);

    if (!product) {
      return <div>Producto no encontrado</div>
    }

    return <ProductSection product={product} addToCart={addToCart} />
  }

  return (
    <div className='min-h-screen mx-auto p-6'>
      {currentSection === 'inicio' ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b '>
            {[...new Set(products.map(product => product.category))]
              .filter(category => category)
              .map((category) => {
                const firstProduct = products.find(p => p.category === category);
                return (
                  <CategoryCard
                    key={category}
                    image={firstProduct?.image}
                    title={category.charAt(0).toUpperCase() + category.slice(1)}
                    onClick={() => navigate(`/tienda/${category}`)}
                  />
                );
              })}
          </div>
          <div className='flex justify-center items-center py-6'>
            <h3 className='text-center'>Destacados</h3>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-6'>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} onClick={() => navigate(`/tienda/${product.category}/${product.id}`)} />
            ))}
          </div>
        </>


      ) : (
        <>
          <div className='text-gray-600 flex gap-1'>
            <Link className='hover:text-black' to="/tienda/">Inicio</Link>
            <span>/</span>
            <Link className='hover:text-black' to={`/tienda/${currentSection}`}>
              {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6 border-b'>
            {products
              .filter(product => product.category === currentSection)
              .map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} onClick={() => navigate(`/tienda/${product.category}/${product.id}`)} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tienda;