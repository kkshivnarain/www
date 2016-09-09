$.support.cors = true;
	function onLoad(){
	}
var app = angular.module('myTaskApp', []);
app.controller('formCtrl',  function($scope) {
	if(localStorage.getItem("phone")!=undefined){
	$scope.phone=localStorage.getItem("phone");
	}
	if(localStorage.getItem("domain")!=undefined){
	$scope.domain=localStorage.getItem("domain");
	}
	$scope.saveSettings=function(){
		localStorage.setItem("phone",$scope.phone);
		localStorage.setItem("domain",$scope.domain);
		window.open("index.html","_self");
		}
});