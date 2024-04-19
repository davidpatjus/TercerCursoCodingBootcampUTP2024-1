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

function fibo(n) { // se declara la funcion con el parametro n para obtener el resultado de la func fibonacci
    let fib = [0, 1];  // Inicializamos un arreglo con los primeros dos términos de la secuencia de Fibonacci.
    
    if (n <= 2) { // Si n es menor o igual a 2, devolvemos los primeros 'n' términos de la secuencia.
      return fib.slice(0, n);
    }
    
    for (let i = 2; i <= n; i++) { // Calculamos los términos de la secuencia de Fibonacci adicionales.
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib; // Devolvemos el arreglo completo de los 'n' términos de la secuencia.
  } 

let FibMax100 = fibo(11);
let res = FibMax100.reduce((a,b) => a+b, 0);

console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100. \nLos numeros a sumar son: ")
console.log(FibMax100.toString()," y su suma es :",res);
