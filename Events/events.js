//event listeners
const view1 = document.getElementById("view1");//selction by id
console.log(view1);

const view2 = document.querySelector("#view2"); //use # when selecting an id using query selector
console.log(view2);
const view3 = document.querySelector("#view3"); //use # when selecting an id using query selector
console.log(view2);
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";


//syntax: addEventListener(event, function,useCapture)
/*example1
const doSomething = ()=>{
    alert("doing something");

}
h2.addEventListener("click",doSomething,false);
h2.removeEventListener("click",doSomething,false);

//with anonymous function
h2.addEventListener("click", (event)=>{
    console.log(event.target);
    event.target.textContent="clicked";
});*/

/*document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState:complete");
        initApp();
    }
});

const initApp=()=>{
    const view = document.querySelector("#view2");
const div= view.querySelector("div");
const h2 = div.querySelector("h2");

view.addEventListener("click",(event)=>{

    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
});
div.addEventListener("click",(event)=>{
   
    div.classList.toggle("blue");
    div.classList.toggle("black");
});

h2.addEventListener("click",(event)=>{
    const mytext=event.target.textContent;
    mytext==="My 2nd View"?event.target.textContent="Clicked":event.target.textContent="My 2nd View"
    //event.target.textContent="Clicked"; //when usecapture is set to true it propagates from outside to inside
});

const nav =document.querySelector("nav");
nav.addEventListener("mouseover",(event)=>{
    event.target.classList.add("height100");
});
nav.addEventListener("mouseout",(event)=>{
    event.target.classList.remove("height100");
})

};

*/

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("readyState:complete");
        initApp();
    }
});

const initApp=()=>{
    const view3 = document.querySelector("#view3");
    const myForm= view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("submit event");
    });

}
