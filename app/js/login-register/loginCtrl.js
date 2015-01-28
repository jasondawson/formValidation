var app = angular.module('devSocial');

app.controller('loginCtrl', function($scope, loginService) {
	$scope.user = {};
	$scope.showSuccess = false;
	$scope.loginMessage = 'Login Failed!'
	
/*	console.log($scope.user);*/
	
	$scope.login = function() {
		loginService.login($scope.user).then(function(res) {
			if (res.success) {
				$scope.loginMessage = 'Login Success!';
				$scope.showSuccess = true;
			}
			else {
				$scope.loginMessage = 'Login Failed!';
				$scope.showSuccess = true;
			}
		  })
	}
})