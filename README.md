Describe: Pizza();

Test: "It should construct a new pizza object with toppings and size and price properties"
Code: let pizza = new Pizza(["olives", "mushrooms"], "large");
Expected Output: "{toppings: ["olives", "mushrooms"], size: "large", price: 10 }

Describe: calculatePizzaCost();

Test: "It should return a price for large size cheese pizza"
Code: let myPizza = new Pizza(["cheese"], "large");
myPizza.calculatePizzaCost();
Expected Output: myPizza.price = 12