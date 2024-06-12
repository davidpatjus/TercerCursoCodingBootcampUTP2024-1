import React, { useState, useEffect } from 'react';
import axios from '../axiosconfig';
import ProductGrid from '../components/ProductGrid';
import '../stylesheets/Page.css';

 /**
 * Componente Home
 * @returns Elemento JSX
 */

const Home = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // useEffect para obtener productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Petición para obtener todos los productos
        const response = await axios.get('/sites/MLA/search?seller_id=179571326');
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="page-container">
      <h1>Productos de Don Miguel</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
