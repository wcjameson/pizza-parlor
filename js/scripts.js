function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 10;
}

Pizza.prototype.calculatePizzaCost = function() {
  // let price = 10;
  if (this.toppings === "cheese" && this.size === "large") {
     return this.price += 2;
    } else if (this.toppings === "artichoke" && this.size ==="personal") {
      return this.price += 2;
    } else if (this.toppings === "artichoke" && this.size ==="large") {
      return this.price += 4;
    } else if (this.toppings === "olive" && this.size ==="personal") {
      return this.price += 2;
    } else if (this.toppings === "olive" && this.size ==="large") {
      return this.price += 4;
    } else {
      return this.price;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputTopping = $("#toppings").val();
    const inputSize = $("#size").val();

    let myPizza = new Pizza(inputTopping, inputSize);
    myPizza.calculatePizzaCost();

    $("#output").text("$" + myPizza.price);
  })
})

