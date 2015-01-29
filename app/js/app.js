'use strict';

var app = angular.module('devSocial', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'app/js/home/home.html',
      controller: 'homeCtrl'
      // resolve: {
      //   allData: function($route, homeService){
      //     return homeService.getAllData();
      //   }
      // }
    })
    .otherwise({
      redirectTo: '/'
    });

}]);

app.directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);