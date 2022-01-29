
# Pizza Parlor

#### By William Jameson

#### A pizza parlor webpage

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery

## Description

This page will tell you how much your pizza costsw depending on the topping and the size!

## Setup/Installation Requirements

* Navigate to the github repository by following the url https://github.com/wcjameson/pizza-parlor
* You can clone the repository to your machine by following these steps
* In your terminal enter the following
* git clone https://github.com/wcjameson/pizza-parlor.git
* Open the index.html file in your browser

## Known Bugs

* Currently no known bugs.

## Tests

Describe: Pizza();

Test: "It should construct a new pizza object with toppings, size and price properties"
* Code: let pizza = new Pizza("olives", "large");
* Expected Output: "{toppings: "olives", size: "large", price: 10}

Describe: calculatePizzaCost();

Test: "It should return a price for a personal size cheese pizza"
* Code: let myPizza = new Pizza("cheese", "personal");
myPizza.calculatePizzaCost();
* Expected Output: 10

Test: "It should return a price for large size cheese pizza"
* Code: let myPizza = new Pizza("cheese", "large");
myPizza.calculatePizzaCost();
* Expected Output: 12

Test: "It should return a price for a large size olive or artichoke pizza"
* Code: let myPizza = new Pizza("olive", "large"); or let myPizza = new Pizza("artichoke", "large");
myPizza.calculatePizzaCost();
* Expected Output: 14

Test: "It should return a price for a personal size artichoke or olive pizza"
* Code: let myPizza = new Pizza("olive", "personal"); or let myPizza = new Pizza("artichoke", "personal");
myPizza.calculatePizzaCost();
* Expected Output: 12

## License

MIT License

Copyright (c) [2022] [William Jameson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
