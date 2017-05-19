var resumeApp = angular.module('resumeApp', ['ui.router']);
resumeApp.config(function($stateProvider, $urlRouterProvider) {
    var location = 'http://localhost:5000/'; 
    $urlRouterProvider.otherwise('/home');    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: location + 'components/home/templates/home.html',
            controller: 'resumeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: location + 'components/about/templates/about.html'
        })
        .state('hire', {
            url: '/hire',
            templateUrl: location + 'components/hire/templates/hire.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: location + 'components/contact/templates/contact.html'
        });
});


/*resumeApp.controller('resumeController', function resumeController($scope, $http) {
	$http.get("http://localhost:3000/profile").then(function (response) {
		$scope.response = response.data;
	});
});*/