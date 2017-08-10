var app = angular.module("richReddit", []);

app.controller("redditController", function($scope, $http){
	var url = "https://www.reddit.com/r/aww/.json";
	$http.get(url).then(function(response){
		$scope.pets = response.data.data.children;
	});
});