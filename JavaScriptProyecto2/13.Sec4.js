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

const letra = 'P'; // Define la letra que se va a imprimir en el patrón
const inicioColumna = 34; // Define el inicio de la columna donde se imprimirá la letra en cada fila del patrón
const finColumna = 46; // Define el final de la columna donde se imprimirá la letra en cada fila del patrón
const altura = 7; // Define la altura del patrón, es decir, el número de filas que se imprimirán

for (let fila = 0; fila <= altura; fila++) { // Bucle para iterar sobre cada fila del patrón
    let linea = '                                 '; // Inicializa una línea con espacios en blanco para ajustar la posición de la letra
    for (let espacio = 0; espacio <= (fila) * 2 ; espacio++) { // Bucle para agregar espacios en blanco antes de la letra en cada fila
        linea += ' '; // Agrega un espacio en blanco a la línea
    }
    for (let columna = inicioColumna; columna <= finColumna - (fila) * 2; columna++) { // Bucle para agregar la letra en cada fila
        linea += letra + ' '; // Agrega la letra seguida de un espacio en blanco a la línea
    }
    console.log(linea); // Muestra la línea construida en la consola
}