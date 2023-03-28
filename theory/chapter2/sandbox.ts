// boolean : true or false values

let condition1: boolean = true; // Explicit
let condition2 = false; // Implicit



// number : whole numbers and floating point values

let number1: number = 1;    // Explicit
let number2 = 2;    // Implicit



// string : text values like "chao lobi"
let str1: string = "chao"; // Explicit
let str2 = "lobi"; // Implicit



// ts array
const names: string[] = [];

names.push("chao");
names.push("Lobi");
// names.push(3); // error, since we change the array element type


// ts object
let car: { type: string, model: string, year: number } = {
    type: "lamborghini",
    // type = "lamborghini" -> error syntax
    model: "Aventador",
    year: 12
}