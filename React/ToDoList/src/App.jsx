import './App.css'
import davidLogo from './images/david.png'
import ListaDeTareas from './components/ListaDeTareas'


function App() {

  return (
  <div className="Aplicacion-tareas">
    <div className='david-logo-contenedor'>
      <img src={davidLogo} alt="Logo de David" className='david-logo' />
    </div>

    <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
    </div>
  </div>
  );
}

export default App;
