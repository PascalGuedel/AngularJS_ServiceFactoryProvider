myApp.service("calculatorService", function () {
    this.Hello = function () {
        return "Hello from Service";
    };
    this.Sum = function (a, b) {
        return a + b;
    };
});