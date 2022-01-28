function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.calculatePizzaCost = function() {
  if (this.toppings === ["cheese"] && this.size === "large") {
    this.price = 12;
  } 
}

