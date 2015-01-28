var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope, signupService) {
	$scope.loginShow = true;
	$scope.signupShow = false;
	$scope.states = signupService.getStates();



})