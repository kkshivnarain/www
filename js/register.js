$.support.cors = true;
	function onLoad(){
	}
var app = angular.module('myTaskApp', []);
app.controller('formCtrl',  function($scope,$http) {
	if(localStorage.getItem("phone")!=undefined){
	$scope.phone=localStorage.getItem("phone");
	}
	if(localStorage.getItem("domain")!=undefined){
	$scope.domain=localStorage.getItem("domain");
	}
	$scope.saveSettings=function(){
		localStorage.setItem("phone",$scope.phone);
		localStorage.setItem("domain",$scope.domain);
		var myurl=localStorage.getItem("domain");
		myurl=myurl+"/accounts/otp/";
		$http({
			method : "POST",
			data:{"phone":$scope.phone,"first_name":$scope.name},
			url : myurl
			}).then(function mySucces(response) {
				alert("Welcome "+$scope.name+". You are registered");
				window.open("otp.html","_self");
				console.log(response.data);
			}, function myError(response) {
				console.log(response.statusText);
				alert("User exist, Request for OTP to activate");
				window.open("otp.html","_self");
		});	
//		window.open("index.html","_self");
		}
		$scope.deRegister=function(){
		localStorage.removeItem("phone");
		localStorage.removeItem("name")
		localStorage.removeItem("auth")
		window.open("index.html","_self");
		}
});