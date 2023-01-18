// Iteration 1: Names and Input
let hacker1 = "Aleix";
console.log(hacker1.length);
let hacker2 = "Jarko";

console.log("--------------");
console.log("Iteration 001");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

console.log("--------------");

// Iteration 2: Conditionals
// Variation 001 - USING A IF-ELSE_IF-ELSE conditional :)
console.log("Iteration 002 - Variation 001");
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(`
    It seems that the navigator has the longest name, it has ${hacker2.length} characters.
   `);
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

console.log("Iteration 002 - Variation 002 ");
// SYNTAX basado en esta iteracion
// [hacker1.length > hacker2.length][? ""][: ""]
//3 blocks :
// 1. Primer bloque, donde condicionamos codigo
// 2. Segundo bloque, si la condicion inicial es TRUE se ejecuta el codigo dentro del bloque #2
// 3. Tercer bloque, si la condicion inicial es FALSE se ejecuta el codigo dentro del bloque #3

// First Example - 50/50 conditional - Ternary
console.log("Ternary 50/50 ");

//SYNTAX INICIAL RELACIONADO AL EJERCICIO - 50/50 - Ternary
hacker1.length > hacker2.length ? "" : "";
//SYNTAX INICIAL RELACIONADO AL EJERCICIO - Multiple Use Cases - Ternary
hacker1.length > hacker2.length
  ? ""
  : hacker1.length === hacker2.length
  ? ""
  : hacker2.length >= hacker1.length
  ? ""
  : "";

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : console.log(`
It seems that the navigator has the longest name, it has ${hacker2.length} characters.
`);

// Second Example - Using 2 or more conditions - Ternary
console.log("Using 2 or more conditions");
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker2.length} characters!.`
    )
  : console.log(`
  It seems that the navigator has the longest name, it has ${hacker2.length} characters.
  `);

//URL LINK TO REVIEW = https://www.programiz.com/javascript/ternary-operator

// Iteration 3: Loops
console.log("--------------");
console.log("Iteration 003");

console.log("Iteration 003 - Variation 001 - Usando un loop 'For' ");
let newName = "Aleix";
console.log(newName.toUpperCase() + " ");
let reservedName = "";
// Using the help of native built in methods from arrayMethods [join()] & string methods [split(), toUpperCase()]
const usingSplitMethod = newName.split("");
console.log(usingSplitMethod);

console.log("Iteration 003 - Using Native Methods ");
const updatedNewName = newName.split("").join(" ").toUpperCase();
console.log(updatedNewName);
console.log("Iteration 003 - Using Native Methods & a for loop ");
// Using a foor loop
for (let i = 0; i < newName.length; i++) {
  //   reservedName += newName[i].split("").join(" ").toUpperCase();
  reservedName += newName[i].toUpperCase() + " ";
}
console.log(reservedName);

console.log("Iteration 003 - Using Native Methods & a for OF loop ");
let driverName = "";
for (const aleixName of newName) {
  driverName += aleixName.toUpperCase() + " ";
}
console.log(driverName);

// ITERATION 3 - Reverse Order
//Iteration 3.3 - Condicional sencillo
console.log("Iteration 003.3 - Conditionals ");
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
