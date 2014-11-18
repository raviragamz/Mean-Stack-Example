app.controller('meetupsController', ['$scope', '$resource', 
	function ($scope, $resource)
	{
		$scope.meetups = [
			{ name: "My first meetup" },
			{ name: "My second meetup" }
		]

		$scope.createMeetup = function ()
		{
			$scope.meetups.push({ name: $scope.meetupName });
			$scope.meetupName = ' ';
		}
	
	}]);


///meetupsController: Angular looks for a function with name of our controller and inject the $scope(bind view to controller)