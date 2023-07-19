//Arrays
const myArray =[];
//add elements to an array
myArray[0]="Satya";
myArray[1]=1001;
myArray[2]=true;
myArray[3]="Satya";

//refer to an array
console.log(myArray);
//length property
console.log(myArray.length);
//last element in an array
console.log(myArray[myArray.length -1]);
//referring a particular element
console.log(myArray[1])

//add more elements to the array
myArray.push("school");
//add elements from the front
myArray.unshift(32); //shift() to remove
console.log(myArray);
//remove
myArray.pop("school");
console.log(myArray);

//splice() to replace add
myArray.splice(1,0,42);
console.log(myArray);
//join() method to add commas, and split() to split

//spread operator to concatenate two arrays

const arrayA=["a","b","c"];
const arrayB=["a","b","c"];
const newarray=[...arrayA, ...arrayB]
console.log(newarray)

//Multi-dimensional arrays

