function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.calculatePizzaCost = function() {
  // let price = 10;
  if (this.toppings === "cheese" && this.size === "large") {
    this.price = 12;
    console.log("your pizza is " + this.price);
  } else {
    console.log("nope");
  }
}

