Minder.service("Product", function($http, AbstractModel) {
	var self;

	var Product = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "ProductImpl");
		
	};

	Product.data = null;
	
	Product.set = function(data) {
		self.unwrap(self, data);
	};

	Product.getById = function(id) {
		if(!id) return {};
		var newProductPromise = $http.get("http://localhost:9000/rest/client/"+id);

		Product.data = new Product(newProductPromise);	
		return Product.data;
	
	};
		
	return Product;
	
});