import { useOutletContext } from 'react-router-dom';
import ProductoSeccion from '../assets/productoSeccion.jsx';
import products from '../assets/producto.jsx';

const Tienda = () => {
  const { carrito, setCarrito } = useOutletContext();

  const addToCart = (product) => {
    setCarrito((prevCarrito) => {
      const existingProduct = prevCarrito.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCarrito.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="min-h-screen">
      <ProductoSeccion products={products} addToCart={addToCart} />
    </div>
  );
};

export default Tienda;
