// JS Bucles - Loops
// Un bucle es un tipo de programa informático que nos permite repetir una operación específica un número predeterminado de veces sin tener que escribir esa operación individualmente.
// Por ejemplo, si quieres mostrar un mensaje 100 veces, puedes utilizar un bucle.
// Es sólo un ejemplo sencillo; puedes conseguir mucho más con los bucles.

// Tenemos los siguientes tipos de bucles:
// - for
// - while
// - do while
// - expansiones del for loop

// JS - For Loop
// Syntax

// for (expresionInicial, condicion, actualizacionDeExpresion){
// //body del bucle for
// }

// Breakdown:
// 1. La expresión inicial inicializa y/o declara variables y se ejecuta sólo una vez.
// 2. Se evalúa la condición.
// 2.a Si la condición es falsa, el bucle for se termina.
// 2.b Si la condición es verdadera, se ejecuta el bloque de código dentro del bucle for.
// 3. La expresión de actualización actualiza el valor de la expresión inicial cuando la condición es verdadera.
// 4. La condición se evalúa de nuevo. Este proceso continúa hasta que la condición es falsa.

// FOR LOOP - SIMPLE EXAMPLE
// Porgramita para imprimir X cantidad de veces un "string en la consola"
console.log("-  FOR LOOP:");
console.log("------------------");
// Variable que usaremos como numero para poder iterar dentro de nuestra "condicion"
const forLoopExample = 10;
// loopeamos o bucleamos :) - desde i = 1 hasta 10 [i === index "buenas practicas"]
for (let iterator = 1; iterator <= forLoopExample; iterator++) {
  console.log("Esto es un ejemplo sencillo de un bucle 'for'");
}

// FOR LOOP - ARRAY OF CITIES
console.log("------------------");
console.log("-  FOR LOOP - USING AN ARRAY OF CITIES:");
const cities = [
  "Barcelona",
  "Tokyo",
  "Chicago",
  "Helsinki",
  "Mordor",
  "Girona",
];
for (let i = 0; i < cities.length; i++) {
  console.log(`-. ${cities[i]}`);
}
console.log("------------------");
// FOR LOOP - MIXED ARRAY
// polimorfismo, es decir, tratar la entrada de una función independientemente de los tipos que se le pasen.
const mixedArray = [
  6,
  45,
  "miami",
  2,
  false,
  "barcelona",
  "200",
  "Manresa",
  9,
  10,
];
const mixedArrayTwo = [
  6,
  45,
  "barcelonaaaa",
  2,
  true,
  "barcelona",
  "200",
  "Manresa",
  9,
  10,
];
//function sum() {}
const sum = (arrayArgument) => {
  let mixedSum = 0;
  for (let i = 0; i < arrayArgument.length; i++) {
    if (typeof arrayArgument[i] === "string") {
      let str;
      str = arrayArgument[i].split("");
      for (let i = 0; i < str.length; i++) {
        mixedSum += str[i].length;
      }
    } else if (typeof arrayArgument[i] === true) {
      mixedSum += 1;
    } else {
      mixedSum += arrayArgument[i];
    }
  }
  return mixedSum;
};
alert(sum(mixedArray));
console.log("Sum of any mixed array");
console.log(sum(mixedArray));
console.log(sum(mixedArrayTwo));
console.log("------------------");

// FOR LOOP - ARRAY OF OBJECTS

// for (expresionInicial, condicion, actualizacionDeExpresion){
// //body del bucle for
// }

const data = [
  { name: "Diego", age: 31, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
console.log("Let's print the ages:");
for (let i = 0; i < data.length; i++) {
  console.log(`-. ${data[i].name}`);
  console.log(`-. ${data[i].age}`);
  console.log(`-. ${data[i].group}`);
}

// FOR LOOP - INFINITE EXAMPLE
// for (let i = 0; i >= 0; i++) {
//   console.log("Inifinite Loop :(");
// }

console.log("------------------");
console.log("-  WHILE LOOP:");
// JS - WHILE LOOP
// Syntax;
// while (condition) {
//   // body del bucle while
// }
//Breakdown:
// 1. Un bucle while evalúa la condición dentro del paréntesis().
// 2. Si la condición es verdadera, se ejecuta el código dentro del body del bucle while.
// 3. La condición se evalúa de nuevo.
// 4. Este proceso continúa hasta que la condición es falsa.
// 5. Cuando la condición es falsa, el bucle se detiene.

// EJEMPLO WHILE LOOP - SUMA DE DO NUMEROS :)
// Variable inicial para guardar el valor total de nuestra suma mediante este loop/bucle
// console.log("------------------");
// console.log("WHIILE LOOP - ADD TWO NUMBERS");
// let addition = 0;
// // creamos variable que contenga los metodos parseInt y prompt para asegurarnos que el usuario impute un numero independiente dle tipo de dato.
// let number = parseInt(prompt("Write a number:"));
// // Generar el bucle de while :)
// while (number >= 0) {
//   // Se encarga de hacer nuestra suma :)
//   addition += number;
//   number = parseInt(prompt("Write another number:"));
// }
// console.log(
//   `The total sum of these two numbers using a while loop is: ${addition}`
// );
//BREAKDOWN
// Aquí se utiliza parseInt() porque prompt() toma la entrada del usuario como una cadena. Y cuando se añaden cadenas numéricas, se comporta como una cadena. Por ejemplo, '2' + '3' = '23'. Así que parseInt() convierte una cadena numérica en un número.

// El bucle while continúa hasta que el usuario introduce un número negativo. Durante cada iteración, el número introducido por el usuario se añade a la variable suma.

// Cuando el usuario introduce un número negativo, el bucle termina. Finalmente, se muestra la suma total

// WHILE LOOP - USING AN ARRAY EXAMPLE
console.log("------------------");
console.log("Cities:");
const whileLoopArrayExample = [
  "Barcelona",
  "Tokyo",
  "Chicago",
  "Helsinki",
  "Mordor",
  "Girona",
];
// Almacenaremos la longitud de el array "whileLoopArrayExample" dentro de una variable para poder usarla dentro del while loop.
let lengthOfWhileArrayExample = whileLoopArrayExample.length;
// verificamos que recibimos el valor de la long del array mencionado en la linea 168
console.log(lengthOfWhileArrayExample);
// dfinimos variable incialmente en 0 para agregarle el valor individual del array :)
let countOfWhileLoopArray = 0;
while (lengthOfWhileArrayExample--) {
  console.log(whileLoopArrayExample[countOfWhileLoopArray]);
  countOfWhileLoopArray++;
}

console.log("------------------");
// WHILE LOOP - ARRAY OF OBJECTS
console.log("Printing Age:");
const whileLoopArrayOfObjectsExample = [
  { name: "Diego", age: 30, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
// Almacenaremos la longitud de el array "whileLoopArrayOfObjectsExample" dentro de una variable para poder usarla dentro del while loop.
let lengthOfWhileArrayObjectExample = whileLoopArrayOfObjectsExample.length;
// dfinimos variable incialmente en 0 para agregarle el valor individual del array :)
let count2 = 0;
while (lengthOfWhileArrayObjectExample--) {
  console.log(whileLoopArrayOfObjectsExample[count2].age);
  count2++;
}

console.log("------------------");
console.log("-  DO WHILE LOOP:");

// JS - DO WHILE LOOP
// SYNTAX
// do {
//   //     // body del bucle do-while
// } while (condition);
//BREAKDOWN
// 1. Primero se ejecuta el cuerpo del bucle. Luego se evalúa la condición.
// 2. Si la condición se evalúa como verdadera, el cuerpo del bucle dentro de la sentencia do se ejecuta de nuevo.
// 3. La condición se evalúa una vez más.
// 4. Si la condición es verdadera, el cuerpo del bucle dentro de la sentencia do se ejecuta de nuevo.
// 5. Este proceso continúa hasta que la condición sea falsa. Entonces el bucle se detiene.

// IMPORTANTE
// El bucle do...while es similar al bucle while. La única diferencia es que en el bucle do...while, el cuerpo del bucle se ejecuta al menos una vez.

// DO WHILE BUCLE - EXAMPLE
// PROGRAMA PARA IMPRIMIR ALGO EN CONSOLA :)
console.log("Imprimir del 1 al 10");
let index = 1;
let doWhileLoopExample = 10;
// usamos el famoso do-while
do {
  console.log(index);
  index++;
} while (index <= doWhileLoopExample);

//console.log("------------------");
console.log("-  FOR OF LOOP:");
// EXAMPLES

// USING AN ARRAY OF NUMBERs VARIABLE
let iterable = [10, 20, 30];
for (let value of iterable) {
  value += 1;
  console.log(value);
}

// USING AN ARRAY OF DATA "CITIES"
const dataSimple = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
for (let value of dataSimple) {
  value += " is our city";
  console.log(value);
}

console.log("------------------");
// USING AN ARRAY OF OBJECTS
const dataTwo = [
  { name: "Diego", age: 30, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
for (let value of dataTwo) {
  value.name += " is the best";
  console.log(value.name);
}

// ------------- Ejercicio 1 (for loop): -------------
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.

// ------------- Ejercicio 2 (for loop): -------------
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.

// ------------- Ejercicio 3 (while loop): -------------
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

// ------------- Ejercicio 4 (do while): -------------
//Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.
