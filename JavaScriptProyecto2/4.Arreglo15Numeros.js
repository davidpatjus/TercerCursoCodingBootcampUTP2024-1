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

const prompt = require('prompt-sync')(); // Importar la función prompt desde la librería prompt-sync

// Arreglo para almacenar los números ingresados por el usuario
let numeros = [];

// Función para leer los números del usuario
function leerNumeros() {
    let contador = 0;

    // Función interna para leer los números uno por uno
    function leerSiguiente() {
        if (contador < 15) {
            let numero = parseFloat(prompt('Ingresa un número (diferente de cero): ')); // Solicitar al usuario que ingrese un número
            if (!isNaN(numero)) { // Verificar si el valor ingresado es un número
                if (numero !== 0) { // Verificar si el número ingresado es diferente de cero
                    numeros.push(numero); // Agregar el número al arreglo de números
                    contador++;
                } else {
                    console.log('Por favor, ingresa un número válido (diferente de cero).'); // Mensaje de error si se ingresa cero
                }
                leerSiguiente(); // Continuar pidiendo números hasta que se ingresen 15
            } else {
                console.log('Por favor, ingresa un número válido.'); // Mensaje de error si no se ingresa un número válido
                leerSiguiente(); // Volver a pedir un número válido
            }
        } else {
            // Una vez ingresados los 15 números, calcular los resultados
            calcularResultados();
        }
    }

    leerSiguiente(); // Llamar a la función interna para comenzar a leer los números
}

// Función para calcular los resultados
function calcularResultados() {
    if (numeros.length === 0) { // Verificar si no se ingresaron números
        console.log('No se ingresaron números.');
        return;
    }

    let mayoresA150 = 0; // Contador de números mayores a 150
    let mayor = -Infinity; // Inicializar el mayor con un valor muy pequeño
    let menor = Infinity; // Inicializar el menor con un valor muy grande
    let negativos = 0; // Contador de números negativos
    let sumaPositivos = 0; // Suma de los números positivos
    let cantidadPositivos = 0; // Contador de números positivos

    // Iterar sobre los números para calcular los resultados
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (numero > 150) {
            mayoresA150++;
        }
        if (numero > mayor) {
            mayor = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
        if (numero < 0) {
            negativos++;
        }
        if (numero > 0) {
            sumaPositivos += numero;
            cantidadPositivos++;
        }
    }

    // Calcular promedio de positivos
    let promedioPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;

    // Imprimir los resultados
    console.log('Cantidad de números Mayores a 150:', mayoresA150);
    console.log('Número mayor encontrado:', mayor);
    console.log('Número menor encontrado:', menor);
    console.log('Cantidad de Números negativos encontrados:', negativos);
    console.log('Promedio de los Positivos Encontrados:', promedioPositivos);
}

// Iniciar la lectura de números
leerNumeros();
