/*Factory function
function pizzaFactory(pizzaSize){
    const crust ="original";
    const size = pizzaSize;
    return {
        bake: ()=>console.log(`baking a ${size} ${crust} crust pizza.`)
    };
}
const myPizza = pizzaFactory("small");
myPizza.bake();
*/



//classes
class Pizza{
    crust = "original" //public field
    #sauce = "traditonal" // private field
    constructor(pizzaSize){
    this.size=pizzaSize;
    //this.crust="original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
   
}


