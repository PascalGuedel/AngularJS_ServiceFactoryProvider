myApp.controller('demoController', function ($scope, calculatorService, calculatorFactory, calculatorProvider) {
    // service function call
    $scope.ServiceOutput = "Look for service output here.";
    $scope.HelloService = function () {
        $scope.ServiceOutput = calculatorService.Hello();
    };
    $scope.SumService = function () {
        $scope.ServiceOutput = "The sum is : " + calculatorService.Sum(2, 5);
    };

    // factory function call
    $scope.FactoryOutput = "Look for factory output here.";
    $scope.HelloFactory = function () {
        $scope.FactoryOutput = calculatorFactory.Hello();
    };
    $scope.SumFactory = function () {
        $scope.FactoryOutput = "The sum is : " + calculatorFactory.Sum(22, 5);
    };

    // provider function call
    $scope.ProviderOutput = "Look for factory output here.";
    $scope.HelloProvider = function () {
        $scope.ProviderOutput = calculatorProvider.Hello();
    };
    $scope.SumProvider = function () {
        $scope.ProviderOutput = "The sum is : " + calculatorProvider.Sum(22, 52);
    };
});