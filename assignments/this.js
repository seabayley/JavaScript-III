/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding. When you declare this in global scope it binds to the window or console object.
* 2. Implicit Binding. the 'this' keywords binds to the object it appends when declared with dot notation.
* 3. New Binding. When using a constructor the 'this' keyword is bound to the object returned by the constructor.
* 4. Explicit Binding. When using call or apply you can explicitly declare an object for 'this' to bind to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding

function Animal(species) {
    this.species = species;
}

Animal.prototype.report = function () {
    console.log(this.species);
}

dog = new Animal('dog')
dog.report();

// Principle 3

// code example for New Binding
cat = new Animal('cat');
dog.report();
cat.report();
// Principle 4

// code example for Explicit Binding
jump = function () {
    console.log(`${this.species} jumps.`);
}

jump.call(dog);
jump.call(cat);