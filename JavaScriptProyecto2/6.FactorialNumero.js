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
-salvedad:el programa reconoce los caracteres como NaN (not a number) lo cual arroja problema al ejecutar el codigo sin imprimir la secuencia
*/

const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para obtener entrada del usuario de manera síncrona

function factorial(numero) {
  if (numero === 0) { // Verifica si el número es cero
      return 1; // Devuelve 1 si el número es cero, ya que el factorial de 0 es 1
  } else {
    let resultado = 1; // Inicializa el resultado del factorial como 1
    for (let i = 2; i <= numero; i++) { // Bucle para calcular el factorial del número
      resultado *= i; // Calcula el factorial multiplicando el resultado por cada número desde 2 hasta el número dado
    }
    return resultado; // Devuelve el resultado del factorial
  }
}
  
let numero = parseFloat(prompt("Ingrese el número a calcular: ")); // Solicita al usuario que ingrese un número y lo convierte a punto flotante
  
const resultadoFactorial = factorial(numero); // Calcula el factorial del número ingresado

if (numero === 0) { // Verifica si el número ingresado es cero
  console.log('El factorial de', numero, 'es: 1'); // Muestra el factorial de 0 (que es 1)
} else {
  let factorialString = 'El factorial de ' + numero + ' es: '; // Inicializa una cadena para mostrar el factorial
  for (let i = 1; i <= numero; i++) { // Bucle para construir la representación en cadena del factorial
    factorialString += i; // Agrega el número actual al factorial
    if (i !== numero) { // Verifica si no es el último número en el factorial
      factorialString += ' x '; // Agrega 'x' para indicar la multiplicación entre los números
    }
  }
  console.log(factorialString); // Muestra la representación en cadena del factorial
}