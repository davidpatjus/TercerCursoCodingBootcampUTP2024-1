import davidLogo from './imagenes/david.png';
import Boton from './components/boton';
import Pantalla from './components/input';
import BotonClear from './components/botonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs'
import './App.css';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
    setInput(evaluate(input));
  } else {
    alert('Por Favor ingrese valores para operar bobo.');
  } };

  return (
    <div className='app'>
      <div className='david-logo-contenedor'>
        <img 
        src={davidLogo} 
        className='david-logo'
        alt="la imagen se esta trillando" />
        <p className='text'>Calculadora Interactiva Beta</p>
        <p className='text'>proyecto hecho por: DAVID PATIÑO</p>
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>1</Boton>
          <Boton manejarclick={agregarInput}>2</Boton>
          <Boton manejarclick={agregarInput}>3</Boton>
          <Boton manejarclick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>4</Boton>
          <Boton manejarclick={agregarInput}>5</Boton>
          <Boton manejarclick={agregarInput}>6</Boton>
          <Boton manejarclick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarInput}>7</Boton>
          <Boton manejarclick={agregarInput}>8</Boton>
          <Boton manejarclick={agregarInput}>9</Boton>
          <Boton manejarclick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={calcularResultado}>=</Boton>
          <Boton manejarclick={agregarInput}>0</Boton>
          <Boton manejarclick={agregarInput}>.</Boton>
          <Boton manejarclick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
