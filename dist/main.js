"use strict";
describe('arrow_functions', function() {
  it('should return square value', function() {
    var square = (function(x) {
      return x * x;
    });
    expect(square(3)).toEqual(9);
  });
  it('should multiply parameters', function() {
    var multiply = (function(x, y) {
      return x * y;
    });
    expect(multiply(2, 3)).toEqual(6);
  });
  it('should add parameters', function() {
    var add = (function(x, y, z) {
      return x + y + z;
    });
    expect(add(1, 2, 0)).toEqual(3);
  });
  it('should double array values', function() {
    var numbers = [1, 1, 2];
    var sum = numbers.map((function(x) {
      return x + x;
    }));
    expect(sum).toEqual([2, 2, 4]);
  });
  it('should return undefined when arrow function is not used', function(done) {
    this.outerScope = 'outerScope';
    setTimeout(function() {
      expect(this.outerScope).toBeUndefined();
      done();
    }, 0);
  });
  it('should return value when arrow function is used', function(done) {
    var $__0 = this;
    this.outerScope = 'outerScope';
    setTimeout((function() {
      expect($__0.outerScope).toEqual('outerScope');
      done();
    }), 0);
  });
});

"use strict";
describe('rest_parameter', function() {
  it('should sum all passed parameters', function() {
    var sum = function() {
      for (var args = [],
          $__0 = 0; $__0 < arguments.length; $__0++)
        args[$__0] = arguments[$__0];
      var result = 0;
      for (var arg in args) {
        result += args[arg];
      }
      return result;
    };
    expect(sum(2, 3, 4)).toEqual(9);
  });
});

"use strict";
var $__0 = Object.freeze(Object.defineProperties(["", " + ", " is ", ""], {raw: {value: Object.freeze(["", " + ", " is ", ""])}}));
describe('template_literals', function() {
  it('should interpolate string', function() {
    var name = "world";
    var result = ("Hello, " + name);
    expect(result).toEqual("Hello, world");
  });
  it('should respond to tagged function', function() {
    var x = 1;
    var y = 3;
    var double_value = function(strings) {
      for (var values = [],
          $__1 = 1; $__1 < arguments.length; $__1++)
        values[$__1 - 1] = arguments[$__1];
      var result = '';
      for (var i in strings) {
        result += strings[i] + (values[i] ? (values[i] + values[i]) : '');
      }
      return result;
    };
    var result = double_value($__0, x, y, (x + y));
    expect(result).toEqual('2 + 6 is 8');
  });
});

//# sourceMappingURL=main.js.map