//while loop
let mynumber = 0;
while(mynumber<50){
    console.log(mynumber);
    mynumber+=2;
}

// never create endless loop

// do while loop

do{
    mynumber+=2;
    console.log(mynumber);
}
while(mynumber<50);

//for loop
let name= "Satya"
for(let i =0; i<name.length;i++){
    console.log(name.charAt(i));
}


//break
let name ="Satya";
let counter=0;
let myletter;
while (true) {
    myletter= name[counter];
    console.log(myletter)
    
    if (myletter===counter[4])break; 
    counter++; 
  
    
}

//continue
let name ="Satya";
let counter=0;
let myletter;
while (counter<=4) {
    myletter= name[counter];
    console.log(myletter)
    if (counter===1){
        counter+=2;
        continue;
    }
    if (myletter===counter[4])break; 
    counter++; 
  
    
}
console.log(counter)

