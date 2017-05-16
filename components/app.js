var resumeApp = angular.module('resumeApp', ['ui.router']);


resumeApp.config(function($stateProvider, $urlRouterProvider) {
    
    var location = 'http://localhost:3000/'; 
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: location + 'home/templates/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});


/*resumeApp.controller('resumeController', function resumeController($scope, $http) {
	$http.get("http://localhost:3000/profile").then(function (response) {
		$scope.response = response.data;
	});
});*/