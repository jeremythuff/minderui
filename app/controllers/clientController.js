Minder.controller('ClientController', function ($scope, Clients, Client, $http, $routeParams, $rootScope) {
	$scope.clients = Clients.get();
	$scope.client = Client.getById($routeParams.id);
	$scope.newClient = {};

	$scope.addNew = function() {

		var url = "http://localhost:9000/rest/client/create?";
		url += "name="+$scope.newClient.name+"&";
		url += "email="+$scope.newClient.email+"&";
		url += "phonenumber="+$scope.newClient.phoneNumber+"&";
		url += "location="+$scope.newClient.location+"&";
		url += "notes="+$scope.newClient.notes;

		$http.get(url)
		.success(function(res) {
			$scope.clients = Clients.get();
			$scope.newClient = {};
		}); 
	}

	$scope.update = function(client) {
		
		var url = "http://localhost:9000/rest/client/"+client.id+"/update?";
		url += "name="+client.name+"&";
		url += "email="+client.email+"&";
		url += "phonenumber="+client.phoneNumber+"&";
		url += "location="+client.location+"&";
		url += "notes="+client.notes;

		$http.get(url)
		.success(function() {
			$scope.clients = Clients.get("refresh");
		}); 

	}

	$scope.setDeleteId = function(id) {
		$scope.deleteId = id;
	}

	$scope.setUpdateClient = function(client) {
		$scope.updateClient = client;
	}

	$scope.delete = function(id) {
		$http.get("http://localhost:9000/rest/client/"+id+"/delete")
		.success(function(res) {
			$scope.clients = Clients.get();
		});
	}

	$scope.getDeleteId = function() {
		return "hello";
	}

});
