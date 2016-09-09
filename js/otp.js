$.support.cors = true;

var app = angular.module('myTaskApp', []);
app.controller('formCtrl',  function($scope,$http) {
	if(localStorage.getItem("phone")!=undefined){
	$scope.phone=localStorage.getItem("phone");
	}
	if(localStorage.getItem("domain")!=undefined){
	$scope.domain=localStorage.getItem("domain");
	}else{
	$scope.domain="http://mydomain.com";
	}
	if($scope.phone.substr(0,3)!="+91"){
	$scope.phone="+91"+$scope.phone;
	}
	$scope.sendOTP=function(){
		myurl=$scope.domain+"/accounts/otp/"+$scope.phone.substr(3,10)+"/";
		if($scope.phone.substr(0,3)!="+91"){
		$scope.phone="+91"+$scope.phone;
		}		
//		alert($scope.phone);
		var auth=window.btoa("admin:potterkk");
		localStorage.setItem("phone",$scope.phone);
//		$http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"}; //you probably don't need this line.  This lets me connect to my server on a different domain
//		$http.defaults.headers.common['Authorization'] = 'Basic ' + auth;		
		$http({
			method : "GET",
			url : myurl
			}).then(function mySucces(response) {
				console.log(response.data);
			}, function myError(response) {
			console.log(response.statusText);
		});
//		alert("executed");
	window.open("otpentry.html","_self")
	}
});

//           var data = $.param({
//               fName: $scope.firstName,
//                lName: $scope.lastName
//            });
//        
//            var config = {
//                headers : {
//                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
//                }
//            }
//		$http({
//			method : "GET",
//			url : myurl,
//			data: data,
//			config: config