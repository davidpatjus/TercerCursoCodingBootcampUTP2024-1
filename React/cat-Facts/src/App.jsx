import { useState, useEffect } from 'react';
import './App.css';
import CatFact from './components/CatFact';
import CatImage from './components/CatImage';

function App() {
  const [fact, setFact] = useState('');
  const [firstWord, setFirstWord] = useState('');
  const [error, setError] = useState('');

  const fetchCatFact = () => {
    setError('');
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
        setFirstWord(data.fact.split(' ')[0]);
        console.log(data.fact); // Imprimir el hecho en la consola
      })
      .catch(error => {
        console.error('Error obteniendo el cat fact:', error);
        setError('Error obteniendo el cat fact. intentalo de nuevo.');
      });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error && <p>{error}</p>}
        <CatFact fact={fact} />
        {firstWord && <CatImage keyword={firstWord} />}
        <button onClick={fetchCatFact}>CAMBIAR</button>
      </header>
    </div>
  );
}

export default App;
