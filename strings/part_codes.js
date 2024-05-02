"use strict"

// that returns all characters before the :
//let dashPos = code.indexOf("-");

function getSupplier(code){

    return code.substring(0, code.indexOf(":"));
}



// that returns all characters between the : and -
function getProductNumber(code) {

return code.substring(code.indexOf(":")+1, code.indexOf("-"));




}


// that returns all characters after the -
function getSize(code) {
    return code.substring(code.indexOf("-")+1);


}


let code="ACME:123-L";

console.log(
    " Supplier code: "+getSupplier(code),
    "Product code: "+getProductNumber(code),
    "Size: "+ getSize(code)
);