/*
-fecha de publicacion:15/04/204
-hora: 1PM
-version: 1.1
-autor: ING david patiño
-lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
-version lenguaje: 6.0
-presentado a: tutores tercer bootcamp utp
-Universidad Tecnologica Pereira
-Programa de Ingenieria de Sistemas y Computacion
-descripcion del programa:
-salvedad:
*/

const prompt = require('prompt-sync')(); //llamamos la libreria para utilizar prompt lo utilizaremos para las entradas por parte del usuario.

//PRIMER EJERCICIO
function celsiusToFahrenheit(celsius) { //se declara la funcion con los parametros 
    let fahrenheit = (9 / 5) * celsius + 32; //formula de la funcion asignada a una variable fahrenheit
    return fahrenheit;  } //la funcion retorna la variable fahrenheit

    function conversorDeTemperatura (){ //se declara la funcion de conversion de temperatura ej 1.
    let temperaturaCelcius = prompt("Por favor digite los centigrados a convertir a fahrenheit: "); //se declara una variable donde el usuario ingresa los grados celsius
    if (!isNaN(temperaturaCelcius)) { //verifica si los datos ingresados por el usuario son un numero
        let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelcius); //se declara una variable donde se aplique la funcion con la formula a los datos ingresados por el usuario
        console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit.toFixed(2)); //se muestra en consola el resultado con 2 decimales
    } else {
        console.log("Por favor, ingresa un número válido para la temperatura en grados Celsius."); //en caso de que el usuario no ingrese un numero valido se muestra el mensaje de advertencia
    }}
//FIN PRIMER EJERCICIO

//SEGUNDO EJERCICIO
function IndiceMasaCorporal () { //se declara la funcion para el segundo ejercicio
    let peso = prompt("ingrese el peso en kilogramos: "); //se le pide al usuario ingresar datos
    let altura = prompt("ingresa tu altura en metros: "); //se le pide al usuario ingresar datos
    let imc = peso/(altura ** 2); //se declara una variable que guarde el resultado despues de aplicar la formula con los datos ingresados por el usuario
    console.log("tu índice de masa corporal (IMC) es:",Math.floor(imc)); //se muestra en consola el resultado con una funcion piso para obtener un numero entero
}
//FIN SEGUNDO EJERCICIO

//TERCER EJERCICIO
function nombreUsuario (){
    let nombre = prompt("¿cual es tu nombre?: "); //se le pide al usuario ingresar datos
    let apellido = prompt("¿cual es tu apellido?: "); //se le pide al usuario ingresar datos
    let nacimiento = prompt("¿en que año naciste?: "); //se le pide al usuario ingresar datos

    console.log("nombre de usuario combinado: "+nombre+apellido+nacimiento); //se muestra en consola la concatenacion de los datos ingresados por usuario
}
//FIN TERCER EJERCICIO

//CUARTO EJERCICIO
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
  
  function secfibo(){
  let n = prompt("ingrese el valor de n: "); // Solicitamos al usuario que ingrese el valor de 'n'.
  let fibSec =  fibo(n); // Calculamos la secuencia de Fibonacci hasta el 'n'-ésimo término.
  console.log("Serie de Fibonacci para n =", n, ":", fibSec[fibSec.length -1]); // Mostramos el 'n'-ésimo término de la secuencia de Fibonacci.
  }
  //FIN CUARTO EJERCICIO




//Funcion para mostrar el menu y las opciones 
function mostrarMenu () {
    console.log("seleccione una opcion: ");
    console.log("1. Conversor de celsius a fahrenheit");
    console.log("2. Calculadora IMC");
    console.log("3. Generador Nombre De Usuario");
    console.log("4. Funcion Fibonacci");
    console.log("5. salir");
}

//funcion para manejar la seleccion del usuario
function seleccionar(opcion) {
    switch (opcion) {
        case "1":
            conversorDeTemperatura();
            return;
        case "2":
            IndiceMasaCorporal();
            return;
        case "3":
            nombreUsuario();
            return;
        case "4":
            secfibo();
            return;
        case "5":
        console.log("adios");
            return 0;

        default:
            console.log("ingrese una opcion valida");
            return;
            
    } 
} 

//FUNCION PRINCIPAL
//Muestra el menú de opciones y permite al usuario seleccionar una opción hasta que decide salir.
function main() {
    let opcion;
    do { // Repetir el proceso hasta que el usuario decida salir (ingresando la opción 5).
        mostrarMenu()
        opcion = prompt("Ingrese una opcion ( 5 para salir ): "); 
        if (opcion !== "5") { // Si la opción ingresada no es 5 (salir), se procede a seleccionar la opción.
        seleccionar(opcion); //Llama a la función seleccionar para ejecutar la opción elegida por el usuario.
        }
    } while (opcion !== "5"); // Repetir hasta que el usuario decida salir
}

main(); //se llama a la funcion principal del programa.