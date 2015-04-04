var Minder = angular.module('Minder', 
		[
		 'ngRoute',
		 'ui.bootstrap',
		 'Minder.version'
		 ]).constant('globalConfig',globalConfig);

setUpApp(function() {
	angular.element(document).ready(function() {
  angular.bootstrap(document, ['Minder']);
});
});
