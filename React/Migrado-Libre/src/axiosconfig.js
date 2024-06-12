import axios from 'axios';

// Crear una instancia de axios con configuraciones predeterminadas
const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com',
  timeout: 10000,  // Tiempo de espera de 10 segundos
  headers: { 'Content-Type': 'application/json' }
});

// Añadir interceptores para manejar errores globalmente
instance.interceptors.response.use(
  response => response,
  error => {
    // Manejar errores globalmente
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

export default instance;
