"use strict"

function convertFtoC(sometemp) {

    //setup variable for celcius and fahrenheit
    let fahrenheit = sometemp;
    let celcius = (fahrenheit - 32) * 5 / 9;

    //return the value of the calc as output from the function
    return celcius;
}

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));