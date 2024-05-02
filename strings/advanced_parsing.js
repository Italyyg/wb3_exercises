"use strict"

function parseAndDisplayName(someName) {

    //create a variable to hold the first name 
    let fullName = someName;

    //find the position of the first space
    let space = fullName.indexOf(" ");

    if (space === -1) {


        console.log(`
        Name : ${fullName}
        Only name: ${fullName}
         `);
    }



    else {
        let lastSpace = fullName.lastIndexof("");
        let firstName = fullname.substring(0, fullName.indexOf(" "));
        let middleName = "";
        let lastName = fullName.substring(lastSpace + 1);

        if (lastSpace === firstSpace) {
            console.log(` 
     firstName : ${firstName}
    lastName : ${lastName}`)
        } else {
            middleName + fulllName.substring(firstSpace + 1, Lastspace + 1);
            console.log(`
    First name: ${firstName}
    Middle name: ${middleName}
    Last name: ${lastName}
    `)
        }
    }









}






parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

"use strict"

function parseAndDisplayName(name) {

    let fullName = name;
    let firstSpace = fullName.indexOf(" ");
    let message = `
            Name: ${fullName}`;

    if(firstSpace === -1){
        
        message += `
            Only name: ${fullName}
        `;


    }else{

        let lastSpace = fullName.lastIndexOf(" ");
        let firstName = fullName.substring(0, fullName.indexOf(" "));
        let middleName = "";
        let lastName = fullName.substring(lastSpace + 1);

        if(lastSpace === firstSpace){
            message += `
            First name: ${firstName}
            Last name: ${lastName}
            `
        }else{

            middleName = fullName.substring(firstSpace + 1, lastSpace + 1);
            message += `
            First name: ${firstName}
            Middle name: ${middleName}
            Last name: ${lastName}
            `

        }

    }


    return message;

}

console.log(parseAndDisplayName("Eric Schwartz"));
console.log(parseAndDisplayName("Cher"));
console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Dana Lynn Wyatt"));
