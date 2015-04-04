Minder.controller('ClientController', function ($scope, Clients) {
	$scope.clients = Clients.get();
});
