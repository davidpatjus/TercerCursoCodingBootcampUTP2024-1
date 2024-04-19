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
-salvedad: el programa no reconoce los 0 al principio o final de la cadena de caracteres
*/

const prompt = require('prompt-sync')(); //llamamos la libreria para utilizar prompt lo utilizaremos para las entradas por parte del usuario.

function revertirNumero(numero) {
    let numeroRevertido = 0;
    while (numero > 0) {
        let digito = numero % 10; // Obtiene el último dígito del número
        numeroRevertido = (numeroRevertido * 10) + digito; // Añade el dígito al número revertido
        numero = Math.floor(numero / 10); // Elimina el último dígito del número
    }
    return numeroRevertido;
}


console.log("Este programa lee desde el teclado un número entero y lo imprime alrevés.")
let numero = prompt("Entre el número: ")
let numeroRevertido = revertirNumero(numero);
console.log("el numero invertido es:",numeroRevertido);
  