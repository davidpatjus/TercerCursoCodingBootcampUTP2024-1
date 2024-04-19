/*
-fecha de publicacion:19/04/2024
-hora: 1PM
-version: 1.0
-autor: ING david patiño
-lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
-version lenguaje: 6.0
-presentado a: tutores tercer bootcamp utp
-Universidad Tecnologica Pereira
-Programa de Ingenieria de Sistemas y Computacion
-salvedad:para la ultima secuencia de digitos se usa un console.log linea 34 para que no queden espacios entre las letras,se solucionara en versiones futuras
*/

let ejercicio = [" ", "", "", "", "", "", "", "", ""];

function secuencia() {
    let i = 0;


    const interval = setInterval(() => {
        ejercicio[i + 1] = "A"; // Coloca "A" en la posición i+1
        ejercicio[8 - i] = "A"; // Coloca "A" en la posición 7-i
        let res = ejercicio.join(" ");
        
        console.clear(); // Limpia la consola antes de imprimir la nueva secuencia
        console.log(res);
        ejercicio[i + 1] = ""; // Restaura el espacio en blanco en la posición i+1
        ejercicio[8 - i] = ""; // Restaura el espacio en blanco en la posición 7-i
        i++;
        if (i > 4) {
            clearInterval(interval); // Detiene el intervalo después de imprimir todas las secuencias
        } else if (i == 4){
            console.clear();
            console.log("     AA     ");
            clearInterval(interval); // Detiene el intervalo después de imprimir todas las secuencias
        }
    }, 1000); // Espera 1 segundo entre cada iteración
}

secuencia();
