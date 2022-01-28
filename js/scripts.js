function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePizzaCost = function() {
  let price = 10;
  if (this.toppings === "cheese" && this.size === "large") {
    price = 12;
    console.log("your pizza is" + price);
  } else {
    console.log("nope");
  }
}

