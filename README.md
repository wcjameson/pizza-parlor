Describe: Pizza();

Test: "It should construct a new pizza object with toppings, size and price properties"
Code: let pizza = new Pizza("olives", "large");
Expected Output: "{toppings: "olives", size: "large", price: 10}

Describe: calculatePizzaCost();

Test: "It should return a price for a personal size cheese pizza"
Code: let myPizza = new Pizza("cheese", "personal");

Test: "It should return a price for large size cheese pizza"
Code: let myPizza = new Pizza("cheese", "large");
myPizza.calculatePizzaCost();
Expected Output: 12

Test: "It should return a price for a large size olive or artichoke pizza"
Code: let myPizza = new Pizza("olive", "large"); or let myPizza = new Pizza("artichoke", "large");
myPizza.calculatePizzaCost();
Expected Output: 14

Test: "It should return a price for a personal size artichoke or olive pizza"
Code: let myPizza = new Pizza("olive", "personal"); or let myPizza = new Pizza("artichoke", "personal");
myPizza.calculatePizzaCost();
Expected Output: 12