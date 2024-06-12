import React from 'react';
import '../stylesheets/ProductGrid.css';

/**
 * Componente ProductGrid
 * @param {Array} products - Arreglo de objetos de productos.
 * @returns Elemento JSX
 */

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <a key={product.id} href={product.permalink} target="_blank" rel="noopener noreferrer">
          <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProductGrid;
