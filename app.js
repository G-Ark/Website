var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('resumeController', function resumeController($scope, $http) {
  $http.get("localhost:9000");

});