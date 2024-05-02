"use strict"

function parseAndDisplayName(someName) {

    //create a variable to hold the first name 
    let fullName = someName;

    //find the position of the first space
    let space = fullName.indexOf(" ");

    //create a variable for the first and last time
    //for the first name we start at positiom 0 and go to the space,
    //wince it deosnt include the character in the last position, we get the first name
    let firstName = fullName.substring(0, space);

    //if we start at the space position and do not supply and end position ,it
    //gives us the characters from the space until the end.
    //since we dont want the space, we add the startinf to move us past the space
    let lastName = fullName.substring(space + 1);


    console.log(`
    Name: ${fullName}
    First Name: ${firstName}
    Last name: ${lastName}

`);
}
parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Ian Auston")
parseAndDisplayName("Siddales Grace")