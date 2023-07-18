// var, let and const

//global scope
var x=1;//function scoped
let y=2;//block scoped
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
    var x=10;
    const z=5;
   
{
    var x=11;//function scoped
    const z=6;
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
}
console.log(`function: ${x}`);
console.log(`function: ${y}`);
console.log(`function: ${z}`);
}
myFunc();