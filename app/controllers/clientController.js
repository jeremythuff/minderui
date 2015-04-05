Minder.controller('ClientController', function ($scope, Clients, Client, $http, $routeParams, $rootScope) {
	$scope.clients = Clients.get();
	$scope.client = Client.getById($routeParams.id);

	$scope.addNew = function() {
		$http.get("http://localhost:9000/rest/client/create")
		.success(function(res) {
			$scope.clients = Clients.get();
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
		console.log($scope.deleteId );
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
