$.support.cors = true;
	function onLoad(){
	document.getElementById("phone").value=localStorage.getItem("phone");
	}
var app = angular.module('myTaskApp', []);
app.controller('formCtrl',  function($scope,$http) {
	$scope.phone=localStorage.getItem("phone");
	$scope.confirmOTP=function(){
	var myurl=localStorage.getItem("domain");
	myurl=myurl+"/accounts/otp/"+$scope.phone.substr(3,10)+"/"+$scope.otp+"/";
		$http({
			method : "PUT",
			url : myurl
			}).then(function mySucces(response) {
				console.log(response.data);
				localStorage.setItem("auth",response.data);	
			}, function myError(response) {
			console.log(response.statusText);
		});
//		window.open("login.html","_self") on success;
		alert(localStorage.getItem("auth"));
	}
});

//		$http({
//			method : "POST",
//			url : myurl
//			}).then(function mySucces(response) {
//				console.log(response.data);
//				localStorage.setItem("auth":response.data)
//			}, function myError(response) {
//			console.log(response.statusText);
//		});