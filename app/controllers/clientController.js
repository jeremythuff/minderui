Minder.controller('ClientController', function ($scope, Clients, Client, Products, $http, $routeParams, $rootScope) {
	$scope.clients = Clients.get();
	$scope.client = Client.getById($routeParams.id);
	$scope.newClient = {};
	$scope.editClient = {};
	$scope.products = Products.get();

	$scope.addNew = function() {

		var url = globalConfig.webService+"/rest/client/create?";
		url += "name="+$scope.newClient.name+"&";
		url += "email="+$scope.newClient.email+"&";
		url += "phonenumber="+$scope.newClient.phoneNumber+"&";
		url += "location="+$scope.newClient.location+"&";
		url += "notes="+$scope.newClient.notes;

		$http.get(url)
		.success(function(res) {
			$scope.clients = Clients.refresh();
			$scope.newClient = {};
		}); 
	}

	$scope.update = function(client) {
		
		var url = globalConfig.webService+"/rest/client/"+client.id+"/update?";
		url += "name="+client.name+"&";
		url += "email="+client.email+"&";
		url += "phonenumber="+client.phoneNumber+"&";
		url += "location="+client.location+"&";
		url += "notes="+client.notes;

		$http.get(url)
		.success(function() {
			$scope.clients = Clients.refresh();
		}); 

	}

	$scope.setDeleteId = function(id) {
		$scope.deleteId = id;
	}

	$scope.setUpdateClient = function(client) {
		$scope.updateClient = client;
	}

	$scope.delete = function(id) {
		$http.get(globalConfig.webService+"/rest/client/"+id+"/delete")
		.success(function(res) {
			$scope.clients = Clients.refresh();
		});
	}

	$scope.setEditClient = function(client) {
		$scope.editClient = client;
	}

	$scope.filterAlreadyAdded = function() {
        return function(item) {
            for(clientKey in  $scope.clients.list) {
            	for(var productkey in $scope.clients.list[clientKey].allProducts) {
	            	if(item.id ==  $scope.clients.list[clientKey].allProducts[productkey].id) return false;
	            }
            }  
            return true;
        }
    };

    $scope.addProduct = function(clientId, productId) {

    	var url = globalConfig.webService+"/rest/client/"+clientId+"/add?product="+productId;

		$http.get(url)
		.success(function(data) {
			$scope.clients = Clients.refresh();
			$scope.editClient = Client.getById(clientId);
			$scope.products = Products.refresh();
		});

    }

    $scope.removeProduct = function(clientId, productId) {

    	var url = globalConfig.webService+"/rest/client/"+clientId+"/remove?product="+productId;

		$http.get(url)
		.success(function(data) {
			$scope.clients = Clients.refresh();
			$scope.editClient = Client.getById(clientId);
			$scope.products = Products.refresh();
		});
    	
    }

});
