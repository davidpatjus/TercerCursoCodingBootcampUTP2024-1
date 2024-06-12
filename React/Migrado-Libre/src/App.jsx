import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CategorySidebar from './components/CategoryTree';
import './App.css';  

 /**
 * Componente principal de la aplicación
 * @returns Elemento JSX
 */

const App = () => {
  return (
    <Router>
      <div className="app">
        <CategorySidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
