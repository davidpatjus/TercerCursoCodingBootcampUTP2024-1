import { useState } from 'react';
import './App.css';
import davidlogo from './Assets/david.png';
import Boton from './components/boton';
import Contador from './components/contador';


function App() {
  
  const [numeroClicks,setNumeroClicks] = useState(0);

  const controlclick = () => {
    setNumeroClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    setNumeroClicks(0);
  };

  return (
      <div className='App'>
        <div className='david-logo-contenedor'>
          <img 
            className='david-logo'
            src={davidlogo}
            alt='logo de david'
          ></img>
          <p className='text-ref'>CONTADOR DE CLICKS CON REACT HECHO POR: </p>
          <p className='text-name'>DAVID PATIÑO</p>
        </div>

        <div className='contenedor-principal'>
          <Contador numeroClicks={numeroClicks}></Contador>
          <Boton texto="Click" botonclick={true} controlclick={controlclick}></Boton>
          <Boton texto="Reiniciar" botonclick={false} controlclick={reiniciarContador}></Boton>
        </div>
      </div>
  );
}

export default App;
