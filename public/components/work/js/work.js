resumeApp.controller('resumeController', function resumeController($scope, $http) {
	$http.get("http://localhost:3000/profile").then(function (response) {
		$scope.response = response.data;
	});
});