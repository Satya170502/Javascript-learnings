//DOM-Document Object Model
const view1 = document.getElementById("view1");//selction by id
console.log(view1);

const view2 = document.querySelector("#view2"); //use # when selecting an id using query selector
console.log(view2);
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view"); //selection by class
console.log(views); //displays the elements in a type of array
//selection by queryall

const sameviews = document.querySelectorAll(".view");
console.log(sameviews); //displays the elements in a nodelist

const divs = view1.querySelectorAll("div"); //document is not written as it will take values from inheritance
console.log(divs);
const samedivs = view1.getElementsByTagName("div");  // selection by tag names
console.log(samedivs);

const evendivs = view1.querySelectorAll("div:nth-of-type(2n)"); //selecting a specific elements using nth-of-type()
console.log(evendivs);


for (let i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor="darkBlue";
  
}

const navtext = document.querySelector("nav h1");
console.log(navtext);
navtext.textContent="Hello world !"

const navbar =document.querySelector("nav")
navbar.innerHTML = `<h1> Hello! </h1><p> This should align right`
console.log(navbar);
navbar.style.justifyContent="space-between";

console.log(evendivs[0]);
console.log(evendivs[0].parentElement);
console.log(evendivs[0].parentElement.children);
console.log(evendivs[0].parentElement.childNodes);
console.log(evendivs[0].parentElement.lastChild);
console.log(evendivs[0].parentElement.lastElementChild);
console.log(evendivs[0].parentElement.firstChild);
console.log(evendivs[0].parentElement.firstElementChild);
console.log(evendivs[0].nextSibling);
console.log(evendivs[0].nextElementSibling);
console.log(evendivs[0].previousElementSibling);

view1.style.display ="none";
view2.style.display ="flex";
view2.style.flexDirection ="row";
view1.style.flexWrap ="wrap";
view1.style.margin ="10px";

while(view2.lastChild){
    view2.lastChild.remove(); //to remove a node
}

const createdivs =(parent,iter)=>{
    const newdiv = document.createElement("div");
    newdiv.textContent=iter;
    newdiv.style.backgroundColor="#000";
    newdiv.style.width="100px";
    newdiv.style.height="100px";
    newdiv.style.margin="10px";
    newdiv.style.display="flex";
    newdiv.style.justifyContent="center";
    newdiv.style.alignItems="center";
    parent.append(newdiv)
}
//createdivs(view2,10);
 for(let i=1;i<=12;i++){
    createdivs(view2,i);
 }