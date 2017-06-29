app.factory('MyFactory', function () {
  return {
    sayHello: function () {
      console.log('hello');
    }
  }
});

app.controller('AppController', function (MyFactory) {
  MyFactory.sayHello(); // logs 'hello'
});