//JSON is used to send and receive data
const myObj = {
    name:"Satya",
    hobbies:["eat","sleep","code"],
    hello:function(){
        console.log("Hello");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); //used to convert into strings
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON) //used to convert into an object
console.log(receiveJSON);