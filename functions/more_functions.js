"use strict"

function displayMailingLabel(name, address, city, state, zip) {

    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);
}


displayMailingLabel("italy", "1234 Easy Street", "Fort Myers Beach", "FL", 33931);

displayMailingLabel("John Wick", "1245 My House", "My City","TX", 21456 );

function addNumber(num1, num2) {

    let result = num1 + num2;

    console.log(num1, "+", num2, "=", result);

}

addNumber(10, 30);

addNumber(30,45);

function displayReceipt(totalDie, amountPaid) {
    let results = Math.abs(totalDie - amountPaid).toFixed(2);

    console.log("Total Due :", totalDie);
    console.log("Amount Paid :", amountPaid);


    console.log("Change Due :", results);

    if (amountPaid < totalDie) {
        console.log("You still owe", results);

    }

}

displayReceipt(35.50, 60.20);

displayReceipt(45.25, 45.25);

displayReceipt(35.25, 20.25);


