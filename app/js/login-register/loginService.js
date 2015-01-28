var app = angular.module('devSocial');

app.service('loginService', function($http, $q) {

this.login = function(userObj) {
	dfd = $q.defer();
	$http({
		method: 'POST',
		url: 'http://localhost:1212/loginUser',
		data: {
			user: userObj
		}
	}).then(function(res) {
		res = res.data;
		dfd.resolve(res);
	})

return dfd.promise;
}

});