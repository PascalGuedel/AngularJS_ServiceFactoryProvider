app.service('MyService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
});

app.controller('AppController', function (MyService) {
  MyService.sayHello(); // logs 'hello'
});