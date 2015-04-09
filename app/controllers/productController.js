Minder.controller('ProductController', function ($scope, Products, Product, Reminders, $http, $routeParams) {
	$scope.products = Products.get();
	$scope.product = Product.getById($routeParams.id);
	$scope.newProduct = {};
	$scope.editProduct = {};
	$scope.reminders = Reminders.get();

	$scope.addNew = function() {

		var url = globalConfig.webService+"/rest/product/create?";
		url += "name="+$scope.newProduct.name+"&";
		url += "email="+$scope.newProduct.email+"&";
		url += "phonenumber="+$scope.newProduct.phoneNumber+"&";
		url += "location="+$scope.newProduct.location+"&";
		url += "notes="+$scope.newProduct.notes;

		$http.get(url)
		.success(function(res) {
			$scope.products = Products.refresh();
			$scope.newProduct = {};
		}); 
	}

	$scope.update = function(product) {
		
		var url = globalConfig.webService+"/rest/product/"+product.id+"/update?";
		url += "name="+product.name+"&";
		url += "email="+product.email+"&";
		url += "phonenumber="+product.phoneNumber+"&";
		url += "location="+product.location+"&";
		url += "notes="+product.notes;

		$http.get(url)
		.success(function() {
			$scope.products = Products.refresh();
		}); 

	}

	$scope.setDeleteId = function(id) {
		$scope.deleteId = id;
	}

	$scope.setUpdateProduct = function(product) {
		$scope.updateProduct = product;
	}

	$scope.delete = function(id) {
		$http.get(globalConfig.webService+"/rest/product/"+id+"/delete")
		.success(function(res) {
			$scope.products = Products.refresh();
		});
	}

	$scope.setEditProduct = function(product) {
		$scope.editProduct = product;
	}

	$scope.filterAlreadyAdded = function() {
        return function(item) {
            for(productKey in  $scope.products.list) {
            	for(var reminderkey in $scope.products.list[productKey].allReminders) {
	            	if(item.id ==  $scope.products.list[productKey].allReminders[reminderkey].id) return false;
	            }
            }  
            return true;
        }
    };

    $scope.addReminder = function(productId, reminderId) {

    	var url = globalConfig.webService+"/rest/product/"+productId+"/add?reminder="+reminderId;

		$http.get(url)
		.success(function(data) {
			$scope.products = Products.refresh();
			$scope.editProduct = Product.getById(productId);
			$scope.reminders = Reminders.refresh();
		});

    }

    $scope.removeReminder = function(productId, reminderId) {

    	var url = globalConfig.webService+"/rest/product/"+productId+"/remove?reminder="+reminderId;

		$http.get(url)
		.success(function(data) {
			$scope.products = Products.refresh();
			$scope.editProduct = Product.getById(productId);
			$scope.reminders = Reminders.refresh();
		});
    	
    }

});
