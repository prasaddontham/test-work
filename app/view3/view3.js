'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$http', function($scope, $http) {

  $scope.getSelectedLogs = function () {
    $http.get('http://localhost:8080/logParser?logType='+$scope.logType+'&limit='+$scope.limit).
    then(function(response) {
        angular.copy(response.data, $scope.logsParsed);
    });
};

}]);