import react from "react";
import '../stylesheets/boton.css'

function Boton({texto, botonclick, controlclick}) {
    return (
        <button className={botonclick ? 'boton-click' :  'boton-reiniciar'} onClick={controlclick}>
          {texto}
        </button>
    );
}

export default Boton;