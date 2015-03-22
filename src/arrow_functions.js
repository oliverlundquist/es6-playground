describe('arrow_functions', function () {

    it('should return square value', function () {
        var square = x => x * x;
        expect(square(3)).toEqual(9);
    });

    it('should multiply parameters', function () {
        var multiply = (x, y) => x * y;
        expect(multiply(2, 3)).toEqual(6);
    });

    it('should add parameters', function () {
        var add = (x, y, z) => {
            return x + y + z;
        }
        expect(add(1, 2, 0)).toEqual(3);
    });

    it('should double array values', function () {
        var numbers = [1, 1, 2];
        var sum = numbers.map(x => x + x);
        expect(sum).toEqual([2, 2, 4]);
    });

    it('should return undefined when arrow function is not used', function (done) {
        this.outerScope = 'outerScope';
        setTimeout(function () {
            expect(this.outerScope).toBeUndefined();
            done();
        }, 0);
    });

    it('should return value when arrow function is used', function (done) {
        this.outerScope = 'outerScope';
        setTimeout(() => {
            expect(this.outerScope).toEqual('outerScope');
            done();
        }, 0);
    });

});
