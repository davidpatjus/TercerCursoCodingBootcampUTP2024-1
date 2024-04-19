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

// Función para imprimir la tabla de multiplicar del 1 al 10
function imprimirTablas() {
    // Bucle externo para iterar sobre los multiplicandos del 1 al 10
    for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
        // Bucle interno para iterar sobre los multiplicadores del 1 al 10
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            // Calcular el resultado de la multiplicación
            let resultado = multiplicando * multiplicador;
            // Imprimir la multiplicación en formato "multiplicando x multiplicador = resultado"
            console.log(multiplicando + " x " + multiplicador + " = " + resultado);
        }
    }
}

// Llamar a la función para imprimir las tablas de multiplicar
imprimirTablas();