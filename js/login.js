$.support.cors = true;

	function onLoad(){
	}

	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope, $http) {
	$http.get("http://192.168.1.7:3000/mycity/issuelist/")
	.then(function(response) {
      console.log(response.data);
  });
});

	function authenticate(){
		var username=document.getElementById("inputName").value;
		var password=document.getElementById("inputPassword").value;
		console.log("authenticate");
		checkCredentials()
	}
	function checkCredentials(){
		console.log("checkCredentials");
	}
