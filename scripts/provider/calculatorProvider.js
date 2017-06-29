myApp.provider("calculatorProvider", function () {
    this.$get = function () {
        return {
            Hello: function () {
                return "Hello from Provider";
            },
            Sum: function (a, b) {
                return a + b;
            }
        };
    };
});