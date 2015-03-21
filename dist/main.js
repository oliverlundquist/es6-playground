"use strict";
var square = (function(x) {
  return x * x;
});
console.log(square(3));
var multiply = (function(x, y) {
  return x * y;
});
console.log(multiply(2, 3));
var add = (function(x, y, z) {
  return x + y + z;
});
console.log(add(1, 2, 0));
var numbers = [1, 1, 2];
var sum = numbers.map((function(x) {
  return x + x;
}));
console.log(sum);
function scope() {
  var $__0 = this;
  this.outerScope = 'outerScope';
  setTimeout(function() {
    console.log(this.outerScope);
  }, 0);
  setTimeout((function() {
    console.log($__0.outerScope);
  }), 0);
}
;
new scope();

//# sourceMappingURL=main.js.map