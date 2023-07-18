// functions, provide re usable code

// methods are built-in functions

// function declaration syntax
function sum(num1,num2){
    if (num2===undefined) {
        return num1+num1
    }
    return num1+num2
}
console.log(sum(50,50));

//example2
   function getUserNameFromEmail (email){
    return email.slice(0,email.indexOf("@"));
}
let input = prompt("Enter your email")
console.log(getUserNameFromEmail(input));


//anonymous function
const getUserNameFromEmail = function (email){
    return email.slice(0,email.indexOf("@"));
}
let input = prompt("Enter your email")
console.log(getUserNameFromEmail(input));

//arrow function
const getUserNameFromEmail = (email) =>{
    return email.slice(0,email.indexOf("@"));
}
let input = prompt("Enter your email")
console.log(getUserNameFromEmail(input));



 
// another function

const toProperCase = (name)=>{
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
};


console.log(toProperCase("sAtyA"));
