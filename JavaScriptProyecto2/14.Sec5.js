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

function imprimirPatron(filas) { 
    for (let i = 0; i < filas; i++) {  // Bucle externo para iterar sobre cada fila del patrón
        for (let j = 0; j < i; j++) { // Bucle interno para agregar espacios en blanco antes de imprimir las letras en cada fila
            process.stdout.write("  "); // Escribe dos espacios en blanco en la salida estándar
        }
        for (let k = 0; k < (2 * (filas - i) - 1); k++) { // Bucle interno para imprimir las letras en cada fila
            process.stdout.write("P ");  // Escribe la letra 'P' seguida de un espacio en blanco en la salida estándar
        }
        console.log(); // Imprime una nueva línea después de escribir todas las letras en la fila actual
    }
  }
  imprimirPatron(7); // Llama a la función para imprimir el patrón con 7 filas