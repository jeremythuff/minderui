Minder.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$routeProvider.
		when('/clients', {
			templateUrl: 'view/clients.html'
		}).
		when('/products', {
			templateUrl: 'view/products.html'
		}).
		when('/reminders', {
			templateUrl: 'view/reminders.html'
		}).
		otherwise({redirectTo: '/',
			templateUrl: 'view/clients.html'
		});
}]);