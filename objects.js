//Objects
//key-value pairs in curly braces
const myObj= {name:"Dave"};
const anotherObj={
    alive:true,answer:42,
    hobbies:["Eat","Sleep"],
    beverage:{
        morning:"Cofee"
    },
    action:function(){
        return "Hello";
    }
}
console.log(myObj)

//Object.create() to use for creating another variable as object
const band ={
    vocals:"Robert",
    guitar:"Jimmy",
    drum:"Jhon"

};
console.log(Object.keys(band)) //Object.keys() used to refer to the key of the object
console.log(Object.values(band))////Object.values() used to refer to the values of the object

//for in loop
for(let job in band){
    console.log(`On ${job}, its ${band[job]}`);
}

//Destructuring objects
const {vocals,guitar,drum}=band;
console.log(guitar);

function sings({vocals}){
    return `${vocals} sings`
}
console.log(sings(band));