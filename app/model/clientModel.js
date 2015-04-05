Minder.service("Client", function($http, AbstractModel) {
	var self;

	var Client = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "ClientImpl");
		
	};

	Client.data = null;
	
	Client.set = function(data) {
		self.unwrap(self, data);
	};

	Client.getById = function(id) {
		if(!id) return {};
		var newClientPromise = $http.get("http://localhost:9000/rest/client/"+id);

		Client.data = new Client(newClientPromise);	
		return Client.data;
	
	};
		
	return Client;
	
});