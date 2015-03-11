var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider.state('home', { 
        url:'/',
        templateUrl: 'home.html',
		controller: 'HomeController'
    }).state('user', {
		url:'/user',
        templateUrl: 'user.html',
		controller: 'UserController'
    });
}]);
			
myApp.controller('UserController', ['$scope', '$state',function($scope, $state){
	$scope.users = [];
	
	$scope.addUser = function (user) {
		$scope.users.push(angular.copy(user));
	}
	
	$scope.backToHome = function () {
		$state.go('home');
	}
}]);

myApp.controller('HomeController', ['$scope', '$state',function($scope, $state){
	$scope.goToUsers = function () {
		$state.go('user');
	}
}]);