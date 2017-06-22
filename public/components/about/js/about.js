resumeApp.controller('aboutController', function aboutController($scope, $http) {
	$http.get("http://localhost:3000/profile").then(function (response) {
		var profileResponse = response.data[0];
		$scope.Name = profileResponse.Name;
	});
	$http.get("http://localhost:3000/hobbies").then(function (response) {
		$scope.hobbyResponse = response.data;
	});
});