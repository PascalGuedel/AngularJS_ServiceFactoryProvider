myApp.factory("calculatorFactory", function () {
    var factoryObject = {};
    factoryObject.Hello = function () {
        return "Hello from Factory";
    }
    factoryObject.Sum = function (a, b) {
        return a + b;
    }
    return factoryObject;
});