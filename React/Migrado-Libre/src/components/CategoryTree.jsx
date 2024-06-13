import React, { useState, useEffect } from 'react';
import axios from '../axiosconfig';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/CategoryTree.css';

/**
 * Componente CategoryTree
 * @param {Array} categories - Arreglo de objetos de categorías.
 * @param {Function} toggleCategory - Función para alternar el estado de expansión de una categoría.
 * @param {Array} expandedCategories - Arreglo de IDs de categorías expandidas.
 * @param {Function} onCategoryClick - Función para manejar eventos de clic en la categoría.
 * @returns {JSX.Element} Elemento JSX
 */
const CategoryTree = ({ categories, toggleCategory, expandedCategories, onCategoryClick }) => {
  return (
    <ul className="category-tree">
      {categories.map(category => (
        <li key={category.id} className={`category-item ${expandedCategories.includes(category.id) ? 'expanded' : ''}`}>
          <div onClick={() => toggleCategory(category.id)}>
            <span>{category.name}</span>
            {category.children && (expandedCategories.includes(category.id) ? ' -' : ' +')}
          </div>
          {expandedCategories.includes(category.id) && category.children && (
            <ul className="category-subtree">
              {category.children.map(subcategory => (
                <li key={subcategory.id} onClick={() => onCategoryClick(subcategory.id)}>
                  <span>{subcategory.name}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

/**
 * Componente CategorySidebar
 * @returns {JSX.Element} Elemento JSX
 */
const CategorySidebar = () => {
  // Estado para almacenar las categorías
  const [categories, setCategories] = useState([]);
  // Estado para almacenar las categorías expandidas
  const [expandedCategories, setExpandedCategories] = useState([]);
  // Hook de navegación
  const navigate = useNavigate();

  // useEffect para obtener las categorías al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Petición para obtener las categorías
        const response = await axios.get('/sites/MLA/categories');
        console.log('Response from fetching categories:', response);
        const fetchedCategories = response.data;

        // Petición para obtener productos asociados a cada categoría
        const categoriesWithProducts = await Promise.all(
          fetchedCategories.map(async category => {
            try {
              const productResponse = await axios.get(`/sites/MLA/search?seller_id=179571326&category=${category.id}`);
              console.log('Response from fetching products:', productResponse);
              if (productResponse.data.results.length > 0) {
                return { ...category, children: category.children && category.children.filter(child => child.products_count > 0) };
              }
              return null;
            } catch (error) {
              console.error('Error fetching products for category', category.id, ':', error);
              return null;
            }
          })
        );

        // Filtra categorías válidas y actualiza el estado
        setCategories(categoriesWithProducts.filter(Boolean));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  /**
   * Función para alternar el estado de expansión de una categoría
   * @param {number} categoryId - ID de la categoría a alternar
   */
  const toggleCategory = async (categoryId) => {
    if (expandedCategories.includes(categoryId)) {
      // Si ya está expandida, la colapsa
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      // Si no está expandida, la expande
      setExpandedCategories([...expandedCategories, categoryId]);

      const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
      if (categoryIndex !== -1 && (!categories[categoryIndex].children || categories[categoryIndex].children.length === 0)) {
        try {
          // Petición para obtener subcategorías
          const response = await axios.get(`/categories/${categoryId}`);
          const subcategories = response.data.children_categories;
          const updatedCategories = [...categories];
          updatedCategories[categoryIndex].children = subcategories;
          setCategories(updatedCategories);
        } catch (error) {
          console.error('Error fetching subcategories:', error);
        }
      }
    }
  };

  /**
   * Función para manejar clics en una categoría
   * @param {number} categoryId - ID de la categoría clicada
   */
  const handleCategoryClick = (categoryId) => {
    navigate(`/${categoryId}`);
  };

  return (
    <div className="category-sidebar">
      <CategoryTree
        categories={categories}
        toggleCategory={toggleCategory}
        expandedCategories={expandedCategories}
        onCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default CategorySidebar;
