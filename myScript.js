// This is my first js code

// console.log("Hello, World.");

let name =  "Travis";
console.log(name);

// variables cannot be a reserved key word
// name should be meaningful
// cannot start with a number
// cannot contain space or hyphen (use camelCase)
// variable names are case sensitive 
// can declare multiple variables at once

let interestRate = 0.3
interestRate = 1
console.log(interestRate);

// to lock in value, use "const" syntax
// ie "const interestRate == 0.3"
// constants can NOT be reassigned


// "primitive type variables"
// let name = "Travis"; //string literal
//let age = 30; // number literal
//let isApproved = false; //boolean literal
//let firstName; //creates an undefined variable
//let selectedColor = null; 

// "reference type variables"
// object, array, function

//OBJECTS:

let person = {
    name: "TR",
    age: 33
}

console.log(person);

//two methods to change value of object:

    // 1. "Dot Notation" method (use as personal default)
person.name = "Hex";
console.log(person.name)

    // 2. "Bracket Notation" method
person["name"] = "tr_h3x";
console.log(person.name);

  // bracket application - ex. multiple name option:
let selection = "name";
person[selection] = "TRWH";
console.log(person.name);


//ARRAYS




