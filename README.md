Describe: Pizza();

Test: "It should construct a new pizza object with toppings, size and price properties"
Code: let pizza = new Pizza("olives", "large");
Expected Output: "{toppings: "olives", size: "large", price: 10}

Describe: calculatePizzaCost();

Test: "It should return a price for large size cheese pizza"
Code: let myPizza = new Pizza("cheese", "large");
myPizza.calculatePizzaCost();
Expected Output: 12