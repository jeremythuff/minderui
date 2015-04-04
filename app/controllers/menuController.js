Minder.controller('MenuController', function ($scope, $location) {
	$scope.isActive = function(path) {
	    
	    if(path == "index") {
	    	if ($location.path() == "/") {
	    		return true;
	    	} else {
	    		return false;
	    	}
	    }

	    if ($location.path().substr(0, path.length) == path) {
	      return true
	    } else {
	      return false
	    }
	}
});
