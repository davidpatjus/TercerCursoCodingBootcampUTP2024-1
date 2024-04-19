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

// Función para generar las ternas de enteros
function generarTernas() {
    let contador = 1;

    // Ciclo externo para el primer número de la terna
    for (let i = 1; i <= 3; i++) {
        // Ciclo interno para el segundo y tercer número de la terna
        for (let j = 1; j <= 3; j++) {
            // Imprimir la terna de enteros (contador, i, j)
            console.log(contador, i, j);
            contador++;
        }
    }
}

// Llamamos a la función para generar las ternas de enteros
generarTernas();
