Minder.service("Clients", function($http, AbstractModel) {
	var self;

	var Clients = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "HashMap");
		
	};

	Clients.data = null;
	
	Clients.set = function(data) {
		self.unwrap(self, data);
	};

	Clients.get = function() {

		if(Clients.data) return Clients.data;

		var newClientsPromise = $http.get(globalConfig.webService+"/rest/client/list");
		Clients.data = new Clients(newClientsPromise);	
		return Clients.data;
	};

	Clients.refresh = function() {
		Clients.data = null;
		return Clients.get();
	};

	Clients.getById = function(id) {

		return $http.get(globalConfig.webService+"/rest/client/"+id);
	
	};
		
	return Clients;
	
});

