describe('rest_parameter', function () {

    it('should sum all passed parameters', function () {
        var sum = function (...args) {
            var result = 0;
            for (var arg in args) {
                result += args[arg];
            }
            return result;
        };

        expect(sum(2, 3, 4)).toEqual(9);
    });

});
