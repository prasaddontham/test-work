'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  var self = this;

  $scope.getAllRecipies = function () {
      $http.get('http://localhost:8080/getAllRecipies').
      then(function(response) {
          angular.copy(response.data, $scope.recipies);
      }, function () {
          // Failure
      });
  };

}]);