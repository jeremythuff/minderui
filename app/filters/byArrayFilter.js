Minder.filter('byArray', function() {
	var array = $parse(arrayName)($scope);
    return function(item) {
            return (array.indexOf(item) == -1);
        }
});
