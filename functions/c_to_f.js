"use strict"

function convertCtoF(temp){
//setup variable for fahrenheit to celcius
let celcius = temp;
let fahrenheit = (celcius * 9/5) + 32;


//return the value of the calc as output from the function
return fahrenheit;
}

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));

