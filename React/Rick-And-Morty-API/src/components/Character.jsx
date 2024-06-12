import React from "react";
import "../stylesheets/Character.css"; // Importar estilos para el componente de personaje

function Character({ character }) {
  return (
    <div className="character-container">
      <h2 className="character-name">{character.name}</h2>
      <p className="character-info">Specie: {character.species}</p>
      <p className="character-info">Gender: {character.gender}</p>
      <img className="character-image" src={character.image} alt={character.name} />
      {character.secondImage && (
        <img
          className="character-image character-second-image"
          src={character.secondImage}
          alt={character.name}
        />
      )}
    </div>
  );
}

export default Character;
