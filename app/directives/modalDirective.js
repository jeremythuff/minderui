Minder.directive('modal', function () {
	return {
		templateUrl: 'view/modal.html',
		restrict: 'E',
		transclude: true,
		scope: false,
		controller: "",
		link: function ($scope, element, attr) {
	    	$scope.modal = {
	    		title: attr["titleText"],
	    		btnView: attr["btnView"]
	    	}

	    	$scope.clicked = function(param) {
	    		$scope[attr.clickCall](param);
	    	}
	    }
	};
});