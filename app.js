var myApp = angular.module('myApp', ['ui.router', 'LocalStorageModule']);

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
			
myApp.controller('UserController', ['$scope', '$state', 'UserService', function($scope, $state, UserService){
	$scope.users = UserService.users;
	
	$scope.addUser = function (user) {
		UserService.addUser(angular.copy(user));
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


myApp.factory('UserService', ['localStorageService', function (localStorageService) {
    var userService = {};
	var storedUsers = localStorageService.get('users');
	userService.users = storedUsers ? storedUsers : [];
	userService.addUser = function(user) {
		userService.users.push(user);
		localStorageService.set('users', userService.users);
	}
	return userService;
}]);
