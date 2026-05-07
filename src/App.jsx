import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
 const initialProducts = [
  { id: 1, name: "Tablet", price: 29.99, inStock: true },
  { id: 2, name: "Phone", price: 49.99, inStock: false },
  { id: 3, name: "Laptop", price: 19.99, inStock: true },
]; 

  const [products, setProducts] = useState(initialProducts);

  // REMOVE
  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // FILTER ONLY WHEN BUTTONS ARE CLICKED
  const showInStock = () => {
    setProducts(initialProducts.filter((p) => p.inStock));
  };

  const showOutOfStock = () => {
    setProducts(initialProducts.filter((p) => !p.inStock));
  };

  const showAll = () => {
    setProducts(initialProducts);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={showInStock}>In Stock</button>
      <button onClick={showOutOfStock}>Out of Stock</button>
      <button onClick={showAll}>All Products</button>

      <ProductList
        products={products}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default App;