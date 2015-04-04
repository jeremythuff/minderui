Minder.service("Clients", function($http, AbstractModel) {
	var self;

	var Clients = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "ArrayList<ClientImpl>");
		
	};

	Clients.data = null;
	
	Clients.set = function(data) {
		self.unwrap(self, data);
	};

	Clients.get = function(action) {

		if(Clients.data && !action) return Clients.data;

		var newClientsPromise = $http.get("http://localhost:9000/rest/client/list");

		Clients.data = new Clients(newClientsPromise);	
		return Clients.data;
	
	};
		
	return Clients;
	
});

