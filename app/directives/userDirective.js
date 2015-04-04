Minder.directive('username', function () {
	return {
		template: '<span>{{user.firstName || "Obtaining User..."}} {{user.lastName}}</span>',
		restrict: 'E',
		scope:true,
		controller: 'UserController'
	};
});

Minder.directive('useremail', function () {
	return {
		template: '<span>{{user.email}}</span>',
		restrict: 'E',
		scope:true,
		controller: 'UserController'
	};
});

Minder.directive('useruin', function () {
	return {
		template: '<span>{{user.uin}}</span>',
		restrict: 'E',
		scope:true,
		controller: 'UserController'
	};
});