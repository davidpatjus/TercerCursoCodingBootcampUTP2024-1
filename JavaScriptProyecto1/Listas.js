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

//MAYORES Y MENORES
function encontrarMinMax(lista) {
    // Verificar si la lista está vacía
    if (lista.length === 0) {
      return "La lista está vacía.";
    }
  
    // Inicializar el número más grande y el más pequeño
    var maximo = lista[0];
    var minimo = lista[0];
  
    // Recorrer la lista para encontrar el máximo y el mínimo
    for (var i = 1; i < lista.length; i++) {
      if (lista[i] > maximo) {
        maximo = lista[i];
      }
      if (lista[i] < minimo) {
        minimo = lista[i];
      }
    }

    return { maximo: maximo, minimo: minimo };
  }
  
    let lista1 =[ 1,3,5,7,9];
    let lista2 =[ 2,4,6,8,10];

  let resultado1 = encontrarMinMax(lista1);
  let resultado2 = encontrarMinMax(lista2);
  console.log(" ");
  console.log(" ");
  console.log("PRIMER EJERCICIO (MAYOR Y MENOR)");
  console.log("para las listas","lista 1:",lista1,"lista 2: ",lista2,"los numeros mayores y menores son: ");
  console.log("El número más grande de lista1 es:", resultado1.maximo);
  console.log("El número más pequeño de lista1 es:", resultado1.minimo);
  console.log("El número más grande de lista2 es:", resultado2.maximo);
  console.log("El número más pequeño de lista2 es:", resultado2.minimo);
  console.log(" ");
  console.log(" ");

  //CONCATENAR LISTAS
  function combinarYOrdenar(lista1, lista2) {
    // Concatenar las dos listas en una sola
    let listaCombinada = lista1.concat(lista2);
    // Ordenar la lista combinada de forma ascendente
    listaCombinada.sort(function(a, b) {
      return a - b;
    });
    
    return listaCombinada;
  }

let listaA =[ 3,7,5,1,9];
let listaB =[ 10,6,8,2,4,];

let listaCombinadayOrdenada = combinarYOrdenar(lista1,lista2);

console.log("SEGUNDO EJERCICIO (concatenar listas)");
console.log("para las listas ","lista 1:",lista1,"lista 2:",lista2,);
console.log("la lista combinada y ordenada es: ",listaCombinadayOrdenada);
console.log("");
console.log("");

//INVERTIR LISTA
let listaC = [ 1,2,3,4,5,6,7,8,9,10];
console.log("TERCER EJERCICIO (revertir listas)");
console.log("para la lista: ",listaC);
console.log(" ");
listaC.reverse();
console.log("la lista revertida es: ",listaC); 
console.log("");
console.log("");
  