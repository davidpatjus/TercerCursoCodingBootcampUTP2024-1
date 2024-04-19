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

// Función para generar las parejas de enteros
function generarParejas() {
    // Inicializamos el primer número de la pareja en 0
    let primerNumero = 0;

    // Iteramos hasta el número deseado (en este caso 9)
    for (let i = 0; i <= 9; i++) {
        // Si el índice actual es par, incrementamos el primer número de la pareja
        if (i % 2 === 0) {
            primerNumero++;
        }
        // Imprimimos la pareja de enteros (primerNumero, i)
        console.log(i,primerNumero);
    }
}

// Llamamos a la función para generar las parejas de enteros
generarParejas();