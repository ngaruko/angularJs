//this is my new angular app
var myApp=angular.module('myApp',[

		'ngRoute',
		'tutorControllers'
	]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('./list', {
		templateUrl:'partials/list.html',
		controller:'ListController'
	}).
	otherwise ({
		redirectTo:'/list'
	});

}]);

//end of code