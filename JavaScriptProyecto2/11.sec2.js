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
-salvedad:
*/

function imprimirEscaleraEspejo(filas) {
    let startNumber = 80; // Inicializa la posición del primer 'A' en cada fila

    // Itera a través de cada fila de la escalera
    for (let i = 0; i < filas; i++) {
        let escalera = ""; // Inicializa la cadena para almacenar la fila actual de la escalera

        // Agrega espacios en blanco para alinear la escalera a la derecha
        for (let j = 0; j < 80 - i - 1; j++) {
            escalera += " ";
        }

        // Agrega 'A's en orden descendente
        for (let k = startNumber; k >= startNumber - i; k--) {
            escalera += "A";
        }

        // Imprime la fila actual de la escalera
        console.log(escalera);
    }
}

// Llama a la función con el número de filas deseado
imprimirEscaleraEspejo(24);