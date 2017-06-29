myApp.provider("MyProvider", function () {
    this.$get = function () {
        return {
            sayHello: function () {
                console.log('hello');
            }
        };
    };
});

app.controller('AppController', function (MyProvider) {
  MyProvider.sayHello(); // logs 'hello'
});