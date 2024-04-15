/*
-fecha de publicacion:
-hora:
-version: 1.0
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
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;  }

    function conversorDeTemperatura (){
    let temperaturaCelcius = prompt("Por favor digite los centigrados a convertir a fahrenheit: ");
    if (!isNaN(temperaturaCelcius)) {
        let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelcius);
        console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit.toFixed(2));
    } else {
        console.log("Por favor, ingresa un número válido para la temperatura en grados Celsius.");
    }}
//FIN PRIMER EJERCICIO

//SEGUNDO EJERCICIO
function IndiceMasaCorporal () {
    let peso = prompt("ingrese el peso en kilogramos: ");
    let altura = prompt("ingresa tu altura en metros: ");
    let imc = peso/(altura ** 2);
    console.log("tu índice de masa corporal (IMC) es:",Math.floor(imc));
}
//FIN SEGUNDO EJERCICIO

//TERCER EJERCICIO
function nombreUsuario (){
    let nombre = prompt("¿cual es tu nombre?: ");
    let apellido = prompt("¿cual es tu apellido?: ")
    let nacimiento = prompt("¿en que año naciste?: ")

    console.log("nombre de usuario combinado: "+nombre+apellido+nacimiento);
}
//FIN TERCER EJERCICIO

//CUARTO EJERCICIO
function fibo(n) {
    let fib = [0, 1];
    
    if (n <= 2) {
      return fib.slice(0, n);
    }
    
    for (let i = 2; i <= n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib;
  }
  
  function secfibo(){
  let n = prompt("ingrese el valor de n: ");
  let fibSec =  fibo(n);
  console.log("Serie de Fibonacci para n =", n, ":", fibSec[fibSec.length -1]);
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
function main() {
    let opcion;
    do {
        mostrarMenu()
        opcion = prompt("Ingrese una opcion ( 5 para salir ): ");
        if (opcion !== "5") {
        seleccionar(opcion);
        }
    } while (opcion !== "5");
}

main();