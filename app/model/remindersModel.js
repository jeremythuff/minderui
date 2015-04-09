Minder.service("Reminders", function($http, AbstractModel) {
	var self;

	var Reminders = function(futureData) {
		self = this;

		//This causes our model to extend AbstractModel
		angular.extend(self, AbstractModel);
		
		self.unwrap(self, futureData, "HashMap");
		
	};

	Reminders.data = null;
	
	Reminders.set = function(data) {
		self.unwrap(self, data);
	};

	Reminders.get = function() {

		if(Reminders.data) return Reminders.data;

		var newRemindersPromise = $http.get(globalConfig.webService+"/rest/client/list");
		Reminders.data = new Reminders(newRemindersPromise);	
		return Reminders.data;
	};

	Reminders.refresh = function() {
		Reminders.data = null;
		return Reminders.get();
	};

	Reminders.getById = function(id) {

		return $http.get(globalConfig.webService+"/rest/client/"+id);
	
	};
		
	return Reminders;
	
});

