// src/types/products.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
    category: string;
  }
  
  export interface ProductProps {
    product: Product;
    addToCart: (product: Product) => void;
  }