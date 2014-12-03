var app = angular.module('simplimy', ['simplimy.controllers', 'simplimy.directives']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'index',
		controller: 'IndexController'
	});
}]).config(['$locationProvider', function($locationProvider){
	$locationProvider.html5Mode(true);
}]);