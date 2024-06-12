// CharacterList.jsx
import React, { useEffect, useState } from "react";
import Character from "./Character";
import axios from "axios";
import "../stylesheets/CharacterList.css"; // Importar estilos para el componente CharacterList

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      let allCharacters = [];

      // Obtener datos de múltiples páginas de la API
      for (let page = 1; page <= 20; page += 2) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        const characters = response.data.results;
        allCharacters = allCharacters.concat(characters);
      }

      // Filtrar personajes únicos por nombre y con al menos 2 personajes
      const uniqueCharacters = await filterUniqueCharacters(allCharacters);

      // Obtener segunda imagen para cada personaje
      const charactersWithSecondImage = await Promise.all(
        uniqueCharacters.map(async (character) => {
          const secondImage = await getSecondCharacterImage(character.name);
          return { ...character, secondImage };
        })
      );

      // Establecer los personajes en el estado
      setCharacters(charactersWithSecondImage);
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  };

  const filterUniqueCharacters = async (characters) => {
    const uniqueCharacters = [];
    for (let character of characters) {
      const isDuplicate = uniqueCharacters.some((char) => char.name === character.name);
      if (!isDuplicate) {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${character.name}`);
        const charactersWithSameName = response.data.results;
        if (charactersWithSameName.length >= 2) {
          uniqueCharacters.push(character);
        }
      }
    }
    return uniqueCharacters;
  };

  const getSecondCharacterImage = async (name) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
      const characters = response.data.results;
      // Obtener la segunda imagen directamente de la respuesta de la API
      if (characters.length >= 2 && characters[1].image) {
        return characters[1].image;
      }
      console.error(`No se encontró imagen para el segundo personaje con nombre: ${name}`);
      return null;
    } catch (error) {
      console.error("Error al obtener la segunda imagen del personaje:", error);
      return null;
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="character-list-container">
      {characters.map((character) => (
        <div className="character-list-item" key={character.id}>
          <Character character={character} />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
