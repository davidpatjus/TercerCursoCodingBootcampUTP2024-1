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

function makeSpaces(counter, limit) {
    if (counter < limit) { // Comprueba si el contador es menor que el límite proporcionado.
        process.stdout.write(" "); // Escribe un espacio en blanco en la salida estándar.
        makeSpaces(counter + 1, limit); // Llama recursivamente a la función para imprimir más espacios en blanco.
    }
}

function makeA(counter, limit) {
    if (counter < limit) { // Comprueba si el contador es menor que el límite proporcionado.
        process.stdout.write("A"); // Escribe la letra 'A' en la salida estándar.
        makeA(counter + 1, limit); // Llama recursivamente a la función para imprimir más letras 'A'.
    }
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola.
}

function makeSequence(row, quantityChar, quantitySpaces) {
    if (row < 11) { // Comprueba si el número de filas generado no ha alcanzado el límite (11).
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco antes de la secuencia de letras 'A'.
        makeA(0, quantityChar); // Llama a la función para imprimir la secuencia de letras 'A'.
        makeJump(); // Llama a la función para imprimir un salto de línea al final de la fila actual.
        if (row < 5)
            makeSequence(row + 1, quantityChar + 1, quantitySpaces - 1); // Llama recursivamente a la función para generar la siguiente fila con más letras 'A' y menos espacios.
        else
            makeSequence(row + 1, quantityChar - 1, quantitySpaces + 1); // Llama recursivamente a la función para generar la siguiente fila con menos letras 'A' y más espacios.
    }
}

function main() {
    makeSequence(0, 1, 39); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.