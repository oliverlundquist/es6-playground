describe('template_literals', function () {

    it('should interpolate string', function () {
        var name = "world";
        var result = `Hello, ${name}`;

        expect(result).toEqual("Hello, world");
    });

    it('should respond to tagged function', function () {
        var x = 1;
        var y = 3;
        var double_value = function(strings, ...values) {
            var result = '';
            for(var i in strings) {
                result += strings[i] + (values[i] ? (values[i] + values[i]) : '');
            }
            return result;
        };

        var result = double_value `${x} + ${y} is ${x+y}`;

        expect(result).toEqual('2 + 6 is 8');

    });

});
