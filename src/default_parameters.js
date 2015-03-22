describe('default_parameters', function () {

    var defaultName = function () {
        return "Oli" + "bucks";
    };

    var getGreeting = function (name = "Scott") {
        return "Hello, " + name;
    };

    var getGreetingWithFunction = function (name = defaultName()) {
        return "Hello, " + name;
    };

    it('should set a default value', function () {
        var result = getGreeting();
        expect(result).toEqual("Hello, Scott");
    });

    it('should override the default value', function () {
        var result = getGreeting("Oliver");
        expect(result).toEqual("Hello, Oliver");
    });

    it('should take a function as the default value', function () {
        var result = getGreetingWithFunction();
        expect(result).toEqual("Hello, Olibucks");
    });

    it('should override the function default value', function () {
        var result = getGreetingWithFunction("Oliver");
        expect(result).toEqual("Hello, Oliver");
    });

});
