import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosconfig';
import ProductGrid from '../components/ProductGrid';
import '../stylesheets/Page.css';

/**
 * Componente CategoryPage
 * @returns Elemento JSX
 */

const CategoryPage = () => {
  // Obtiene el ID de la categoría desde los parámetros de la URL
  const { categoryId } = useParams();
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // useEffect para obtener productos cuando cambia el ID de la categoría
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Petición para obtener productos de la categoría
        const response = await axios.get(`/sites/MLA/search?seller_id=179571326&category=${categoryId}`);
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="page-container">
      <h1>Productos en Categoría {categoryId}</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
