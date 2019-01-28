'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  var self = this;
  $scope.getSelectedRecipies = function () {
    $http.get('http://localhost:8080/recipies?recipies=' + $scope.ingredients).
    then(function(response) {
        angular.copy(response.data, $scope.recipiesFiltered);
    });
  };

}]);