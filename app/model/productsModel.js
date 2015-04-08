Minder.service("Products", function($http, AbstractModel) {
	var self;

	var Products = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "HashMap");
		
	};

	Products.data = null;
	
	Products.set = function(data) {
		self.unwrap(self, data);
	};

	Products.get = function() {
		var newProductsPromise = $http.get(globalConfig.webService+"/rest/product/list");
		Products.data = new Products(newProductsPromise);	
		return Products.data;
	};

	Products.getById = function(id) {

		return $http.get(globalConfig.webService+"/rest/product/"+id);
	
	};
		
	return Products;
	
});