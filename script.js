function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])


var p3 = pizzaOven("deep dish", "spicy", ["soya", "daiya"], ["green pepper", "onions", "olives"])

var p4 = pizzaOven("thin crust", "traditional", "mozzarella", "none")



console.log(p1, p2, p3, p4);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} 

function randomPizza(crustType, sauceType, cheeseType, toppingsType){
    var crustType = ["thin crust", "deep dish", "hand tossed"]
    var sauceType = ["marinara", "traditional", "spicy"]
    var cheeseType = ["feta", "mozzarella", "daiya"]
    var toppingsType= ["green pepper", "onions", "olives", "mushroom"]
    var pizza = {};
    pizza.crustType = crustType[getRandomInt(3)];
    pizza.sauceType = sauceType[getRandomInt(3)];
    pizza.cheeseType = cheeseType[getRandomInt(3)];
    pizza.toppingsType = toppingsType[getRandomInt(4)];
    return pizza
}
var p5 = randomPizza();
console.log("Random Pizza:")
console.log(p5);