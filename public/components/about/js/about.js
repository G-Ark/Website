resumeApp.controller('aboutController', function aboutController($scope, $http) {
	$http.get("http://localhost:3000/profile").then(function (response) {
		var profileResponse = response.data[0];
		$scope.Name = profileResponse.name;
		$scope.aboutMe = profileResponse.aboutMe;
	});
	$http.get("http://localhost:3000/hobbies").then(function (response) {
		var hobbyResponse = response.data;
		$scope.hobbyList = "";
		for (var i = 0; i < hobbyResponse.length; i++) {
			$scope.hobbyList += hobbyResponse[i].name;
			$scope.hobbyList += (i != hobbyResponse.length-1)?", ":".";
		}
		$scope.hobbyList += "\n";
		for (var i = 0; i < hobbyResponse.length; i++) {
			$scope.hobbyList += hobbyResponse[i].description + "\n";
		}
	});
});