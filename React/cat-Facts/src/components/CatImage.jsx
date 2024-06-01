import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function CatImage({ keyword }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=1&mime_types=jpg,png&category_ids=&q=${keyword}`)
      .then(response => response.json())
      .then(data => {
        setImageUrl(data[0].url);
        console.log(data[0].url); // Imprimir la URL de la imagen en la consola
      })
      .catch(error => console.error('Error obteniendo la imagen del gato:', error));
  }, [keyword]);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Cat" />}
    </div>
  );
}

export default CatImage;
