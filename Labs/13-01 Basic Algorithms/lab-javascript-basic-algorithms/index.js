// Iteration 1: Names and Input
let hacker1 = "Jose";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Marga"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1 = "Jose";
let hacker2 = "Marga"

if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}  else if (hacker1.length<hacker2.length){
  console.log (`It seems that the navigator has the longest name, it ${hacker2.length} characters`);
} else {
  console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

3.1
let hacker1 = "Jose";
let hacker2 = "Marga"
let upperCase ="";
let reverse = "";

for (let i = 0; i<hacker1.length; i++){
  upperCase += hacker1[i].toUpperCase() + " ";
}
console.log (upperCase);

3.2
for (let j= hacker2.length-1; j>=0; j--){
  reverse += hacker2 [j];
}
console.log (reverse);

3.3

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
