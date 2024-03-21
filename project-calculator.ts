#! /usr/bin/env node

// A simple  calculator 

var  prompt = require("prompt-sync")();

let n1 = parseInt (prompt(`what is your first number`));

let n2= parseInt (prompt(`what is your second number`));

let operator = prompt(`what is your third operator (  + , - , * , /)`)
 
if (operator == "+") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 + n2}`);
    
}
 
else if (operator == "-") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 - n2}`)}
 
else if (operator == "*") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 * n2}`)}
 
else if (operator == "/") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 / n2}`)}
else{ console.log(`please select the correct operator`);
}

export{};
