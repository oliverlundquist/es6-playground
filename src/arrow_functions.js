var square = x => x * x;
console.log(square(3)); //9

var multiply = (x, y) => x * y;
console.log(multiply(2, 3)); //6

var add = (x, y, z) => {
    return x + y + z;
}
console.log(add(1, 2, 0)); //3

var numbers = [1, 1, 2];
var sum = numbers.map(x => x + x);
console.log(sum); //[2, 2, 4]



//scope in arrow functions
function scope() {
    this.outerScope = 'outerScope';

    setTimeout(function () {
        console.log(this.outerScope); //undefined
    }, 0);

    setTimeout(() => {
        console.log(this.outerScope); //outerScope
    }, 0);

};
new scope();
