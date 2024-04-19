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

const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para obtener entrada del usuario de manera síncrona

function calcularSumaFactoriales() {
    let N = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial: ")); // Almacena el número entero positivo ingresado por el usuario

    while (isNaN(N) || N < 0) { // Bucle para asegurarse de que se ingrese un número entero positivo
        console.log("Debe ingresar un número entero positivo. Intentelo de nuevo.");
        N = parseInt(prompt("Ingrese un número entero positivo para calcular su factorial: "));
    }

    let sumaFactoriales = 0; // Almacena la suma de los factoriales
    let factorial = 1; // Almacena el factorial actual
    let factoriales = []; // Almacena todos los factoriales calculados

    for (let i = 0; i <= N; i++) { // Bucle para calcular los factoriales y su suma
        if (i > 0) {
            factorial *= i; // Calcula el factorial actual
        }
        factoriales.push(factorial); // Agrega el factorial actual al arreglo de factoriales
        sumaFactoriales += factorial; // Suma el factorial actual a la suma total
    }

    let output = "= "; // Almacena la representación en cadena de la suma de los factoriales
    for (let i = 0; i < factoriales.length; i++) { // Bucle para construir la cadena de salida
        output += factoriales[i]; // Agrega el factorial actual a la cadena de salida
        if (i < factoriales.length - 1) {
            output += " + "; // Agrega el operador '+' si no es el último factorial en la lista
        }
    }

    console.log(output + " = " + sumaFactoriales); // Muestra la cadena de salida con la suma total de los factoriales
}

calcularSumaFactoriales(); // Llama a la función para calcular y mostrar la suma de los factoriales