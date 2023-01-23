// EJERCICIO 1

// 1. Declara una variable llamada nombre en tu consola y asignale tu nombre.

// let nombre = Gianna

// 2. Declara una variable llamada apellido y asignale como valor tu apellido

// let apellido  Juncal

// EJERCICIO 2

// 1. Declara un array llamado ensaladaDeFrutas con al menos 5 frutas.

// const ensaladaDeFrutas = ["Kiwi", "Melón", "Manzana", "Banana", "Naranja"]

// // 2. Usa un bucle For y muestra cada ítem de ensaladaDeFrutas en la consola, con el
// // siguiente mensaje: “Las frutas que hay en la ensalada son:”

// for (let i = 0; i < ensaladaDeFrutas.length; i++) {
//    console.log ("Las frutas que hay en la ensalada son ${ensaladaDeFrutas[i]}")}

// const edades = [1, 7, 9, 10, 24]

// EJERCICIO 2
// 1. Crea un array de edades con al menos 6 edades distintas.
// 2. Recorre el array con un for y obtén el promedio de las edades del array.


// const edades = [12, 23, 4, 98, 128, 312];
// let suma = 0
// for (i = 0; i < edades.length; i++) {
//     suma = suma + edades[i]
// };
// console.log(suma / edades.length)

// Ejercicio 3: Mis amigos.
// Haga un programa que filtre el arreglo con un for y devuelva uno nuevo con el nombre de
// sus amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es amigo
// tuyo! De lo contrario, no lo son.

// const amigos= ["Jair", "Anto", "Mai", "Agus", "Liber", "Cami", "Matias"]
// for (let i=0; i<amigos.lenght;i++) {
// if  (amigos[i].length === 4) {
// console.log(amigos[i])
// }
// }


// Ejercicio 4: Métodos de arrays.


// const listaDeSuper = ["jabon","pasta","azucar","arroz","tomates"];

// listaDeSuper.push("shampoo");  // Pushear-Agregar el elemento "shampoo"

// listaDeSuper.shift(); // El .shift elimina elemento

// console.log(listaDeSuper.length); // Mostramos en la consola la lista del super

// console.log(listaDeSuper.indexOf("shampoo")) // Consulto la existencia del elemento

// // Ejercicio 5: Mi primera función

// Declara una función llamada saludo() que muestre una alerta de Bienvenida al visitante al
// invocar por la consola del navegador

// function saludo() {
//     alert("HOLAAAAAA")
// }

// EJERCICIO 6: Calculando el mayor

// 1. Declara una función que se llama calculoMayor() y pásale como parámetros
// (num1,num2).
// 2. Dentro de la función muestra una alerta que diga quién de los números ingresados
// es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta
// también.
// 3. Invoca la función y llena los argumentos con los números que desees.


// function calculoMayor (num1,num2){
//     if(num1>num2){
//     alert(num1 +" es mayor que "+ num2);
//     } else if(num2>num1) {
//     alert(num2 + " es mayor que " +num1);
//     } else {
//     alert ("Los numeros son iguales")
//     }

// }

// console.log(calculoMayor(5,7))

// Ejercicio 7: Mis amigos.
// 1. Declara una función que se llame filtrarAmigos() y pásale como parámetro (arr).
// 2. La función deberá filtrar el arreglo y devolver uno nuevo con el nombre de sus
// amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es
// amigo! De lo contrario, no lo son.


// const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
// const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]
// let filtrarAmigos = (arr) => {
//     const amigo = []
//     for (let i = 0; i < arr.length; i++) {
//         let numeroElem = arr[i]
//         if (numeroElem.length === 4) {
//             amigo.push(arr[i])
//         }
//     }
//     if (amigo.length > 0) {
//         console.log("Tus amigos son " + amigo + " Cuidalos ")
//     } else {
//         console.log("No tenés amigos")
//     }
//     }
//     filtrarAmigos(amigo1)
// filtrarAmigos(amigo2)

// Ejercicio 8: Tirar dados.
// 1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
// resultado aleatorio del siguiente array: const dado = [1, 2, 3, 4, 5, 6];
// 2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a través de
// un math.ramdom(pregúntale a san Google como funciona este señor).

// const dado = [1, 2, 3, 4, 5, 6];

// function tirarDado() {
//     console.log(dado[(Math.floor(Math.random() * 6))])
// }

// Ejercicio 9: Creando y consultando un objeto


// let toDoList = {
//     "Tipo de tarea": "Compras",
//     dia: "sábado",
//     productos: ["Delineador", "Base", "Labial", "Shampoo", "Computadora", "Mouse", "Cámara", "Celular A53", "Pollo", "Aceitunas", "Pizza", "Croquetas", "Durazno", "Serenito", "Helao"],
//     cantDeProductos: 15,
//     estado: "pendiente",
//     notification: funcion = () => {
//         alert("Esta tarea tiene prioridad urgente!!")
//     }
// }

// console.log(funcion());
// console.log(toDoList["cantDeProductos"]);
// console.log(toDoList["Tipo de tarea"]);
// console.log(toDoList.dia);

// Ejercicio 10: Consultando valores.

// const superHeroes = {
//     "squadName": "Super Hero Squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [{
//             "name": "Molecule Man",
//             "age": 29,
//             "secretIdentity": "Dan Jukes",
//             "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//         },
//         {
//             "name": "Madame Uppercut",
//             "age": 39,
//             "secretIdentity": "Jane Wilson",
//             "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes "]
//         }
//     ]
// }

// console.log(superHeroes["squadName"])
// console.log(superHeroes.members[1].name)
// console.log(superHeroes.members[1].powers[2])
// console.log(superHeroes.members[1].age)

// Ejercicios de métodos avanzados de arrays
// EJERCICIO 1: Mis amigos.

// const amigos = ["Ryan", "Kieran", "Mark", "Miguel"]
// const result = amigos.filter(amigo => amigo.length === 4);
// console.log(result);

// EJERCICIO 2: Corrigeme la frase.

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// const modifiedFrases1 = frases.map(function(element) {
//     return element;
// });
// const modifiedFrases2 = frases.map(function(element) {
//     return '¡' + element + '!';
// });
// console.log(modifiedFrases1);
// console.log(modifiedFrases2);