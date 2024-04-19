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
POR CUESTIONES DE TIEMPO ESTABLECIDO EN EL CONTRATO EL EJERCICIO SE ENCUENTRA ES ESTADO DE DESARROLLO
por el momento el codigo funciona con la secuencia rush(5,1), en proximas actualizaciones se solucionaran los problemas con las demas secuencias
*/

const rush = (x, y) => { // Declara una función llamada "rush" que toma dos parámetros, x e y.
    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) { // Comprueba si x e y son enteros positivos.
      console.log("Los valores de x e y deben ser enteros positivos."); // Imprime un mensaje de error si x o y no son enteros positivos.
      return; // Retorna para finalizar la ejecución de la función.
    }
    const ancho = Math.max(x, 2); // Calcula el ancho máximo como el máximo entre x y 2.
    const topBottom = `/${'*'.repeat(ancho - 2)}\\`; // Crea una cadena que representa la parte superior e inferior del patrón.
    const middle = `*${' '.repeat(ancho - 2)}*`; // Crea una cadena que representa la parte media del patrón.
    console.log(topBottom); // Imprime la parte superior del patrón.
    for (let i = 0; i < y - 2; i++) { // Bucle para imprimir la parte media del patrón (si y es mayor que 1).
      console.log(middle); // Imprime la parte media del patrón.
    }
    if (y > 1) { // Comprueba si y es mayor que 1.
      console.log(topBottom); // Imprime la parte inferior del patrón.
    }
  };
  rush(5, 1); // Llama a la función "rush" con los valores de x = 5 e y = 1.
  