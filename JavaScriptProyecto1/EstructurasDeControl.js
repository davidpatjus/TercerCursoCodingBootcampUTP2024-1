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
function numeroAzar(){
    let incognita = Math.random() * (100 - 0) + 0;
    adivinar(incognita);
}

function adivinar (incognita){ 
    let incog = Math.floor(incognita)
    console.log(incog)
    let adivinando;
   adivinando = prompt("ingrese un numero para adivinar: ");
    if (adivinando == incog){ 
        console.log("correcto, has adivinado..");
    } else if (adivinando < incog){
        console.log("el numero es demasiado bajo");
        adivinar(incognita);
    } else {
        console.log("el numero es demasiado alto");
        adivinar(incognita);
    }
   }
//FIN PRIMER EJERCICIO

//SEGUNDO EJERCICIO
function calFactorial(){
    let numero = prompt("ingrese un numero para mostrar el factorial: ");
    if (numero < 0){
        console.log("el numero debe ser positivo")
    } else {
            let resultado = factorial(numero);
            console.log("el factorial de",numero," es: ",resultado );
    }}  
    
    function factorial (n) {
        let res = 1;
        for (let index = 1; index <= n; index++){
           res *=index;
        }
        return(res);
       }
//FIN SEGUNDO EJERCICIO

//TERCER EJERCICIO
function identificarVocales(cadena) {
    // Convertimos la cadena a minúsculas para evitar problemas con las mayúsculas
    cadena = cadena.toLowerCase();
    
    // Definimos un array con las vocales
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    
    // Creamos un objeto donde almacenaremos el conteo de cada vocal
    let conteoVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    
    // Iteramos sobre la cadena
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        // Verificamos si el caracter actual es una vocal
        if (vocales.indexOf(caracter) !== -1) {
            // Si es una vocal, incrementamos su conteo en el objeto
            conteoVocales[caracter]++;
        }
    }
    
    // Devolvemos el objeto con el conteo de cada vocal
    return conteoVocales;
}

function contarVocales(){
    let resultado = identificarVocales(prompt("ingrese una palabra para validar: "));
console.log(resultado);
}
//FIN TERCER EJERCICIO

//Funcion para mostrar el menu y las opciones 
function mostrarMenu () {
    console.log("seleccione una opcion: ");
    console.log("1. Adivina El Numero");
    console.log("2. Calculadora Factorial");
    console.log("3. Contador De Vocales");
    console.log("4. salir");
}

//funcion para manejar la seleccion del usuario
function seleccionar(opcion) {
    switch (opcion) {
        case "1":
            numeroAzar();
            return;
        case "2":
            calFactorial();
            return;
        case "3":
            contarVocales();
            return;
        case "4":
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
        opcion = prompt("Ingrese una opcion ( 4 para salir ): ");
        if (opcion !== "4") {
        seleccionar(opcion);
        }
    } while (opcion !== "4");
}

main();