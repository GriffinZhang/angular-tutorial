var myApp = angular.module('myApp', []);
			
myApp.controller('MyController', function($scope){
	$scope.users = [];
	
	$scope.addUser = function (user) {
		$scope.users.push(angular.copy(user));
	}
});