const view1 = document.getElementById("view1");//selction by id
console.log(view1);

const view2 = document.querySelector("#view2"); //use # when selecting an id using query selector
console.log(view2);
view1.style.display = "flex";
view2.style.display = "flex";



//web storage API
//it is not part of DOM- refers to the window api
//available to JS via the global variable: window
//we do not have to type window. it is implied
const myArray=["eat","sleep","code"];
const myObject ={
    name:"Dave",
    hobbies:["eat","sleep","code"],
    logName:function(){
        console.log(this.name);
    }
}

/*session storage
sessionStorage.setItem("mySessionStore",JSON.stringify(myArray));
const mySessionData =JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);*/

//local storage

localStorage.setItem("mySessionStore",JSON.stringify(myArray));
const mySessionData =JSON.parse(localStorage.getItem("mySessionStore"));
console.log(mySessionData);