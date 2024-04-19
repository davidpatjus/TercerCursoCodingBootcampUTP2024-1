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

function makeZ() {
    process.stdout.write("Z"); // Escribe la letra 'Z' en la salida estándar.
}

function makeJump() {
    console.log(); // Imprime un salto de línea en la consola.
}

function makeSequence(row, quantitySpaces) {
    if (row > 0) { // Comprueba si el número de filas generado no ha alcanzado el límite (0).
        makeSpaces(0, row - 1); // Llama a la función para imprimir espacios en blanco antes de la primera letra 'Z' en la fila actual.
        makeZ(); // Llama a la función para imprimir la primera letra 'Z' en la fila actual.
        makeSpaces(0, quantitySpaces); // Llama a la función para imprimir espacios en blanco entre las letras 'Z' en la fila actual.
        if (row < 10)
            makeZ(); // Llama a la función para imprimir la segunda letra 'Z' en la fila actual si la fila no es la última.
        makeJump(); // Llama a la función para imprimir un salto de línea al final de la fila actual.
        makeSequence(row - 1, quantitySpaces + 2); // Llama recursivamente a la función para generar la siguiente fila con más espacios entre las letras 'Z'.
    }
}

function main() {
    makeSequence(10, -1); // Inicia la generación del patrón con los parámetros iniciales.
}

main(); // Llama a la función principal para comenzar la ejecución del programa.