	var app = angular.module('myApp', []);
	var lat=0.0;
	var long=0.0;
	var timestamp=0.0;
	app.controller('myCtrl', function($scope,$http) {
	$scope.domain=localStorage.getItem("domain");
	if(localStorage.getItem("phone") != undefined){
		var phone = localStorage.getItem("phone");
			if(phone.substr(0,3)=="+91"){
				phone=phone.substr(3,10);
			}
	}else{
	window.open("register.html","_self");
	}
	$scope.getPosition = function(myissue) {
		var options = {
		enableHighAccuracy: true,
		maximumAge: 3600000
		}
	
		var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	function onSuccess(position) {
//		if(localStorage.getItem(myissue) != undefined){ if time is less than 2 min from current time, send alert on last issue logged
//		}
		lat=position.coords.latitude;
		long=position.coords.longitude;
		timestamp=position.timestamp;
		console.log(timestamp);
		var myurl=localStorage.getItem("domain");
		myurl=myurl+"/"+"mycity/iwilltrack/"+phone+"/";
		var auth=localStorage.getItem("auth");
//		var phone =localStorage.getItem("phone");
		console.log(myurl);	
		$.ajaxSetup({
			headers: {'Authorization': auth}
		});
		$.ajax({
			url: myurl,
			type:"POST",
			data: {"category": myissue, "latitude":lat,"longitude":long,"timestamp":timestamp/1000},
			dataType: 'json',
			success: function(data){
			console.log(data);
//			localStorage.setItem(myissue,((new Date())/1000); add time when it was last clicked to control multiple click in one go
			},
			error: function(data){
			console.log(data);
			alert("ajax failed");
			}
		});		
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
	$scope.getScore=function(){
	var scoreurl=localStorage.getItem("domain")+"/mycity/score/"+phone+"/";
	console.log(scoreurl);
	var auth=localStorage.getItem("auth");
	console.log(auth);
			$http({
			method : "GET",
			url : scoreurl,
			headers: {'Authorization': auth}
			}).then(function mySucces(response) {
				console.log(response.data);
				localStorage.setItem("thisweekcredit",response.data["thisweekcredit"]);
				localStorage.setItem("lastweekcredit",response.data["lastweekcredit"]);
				window.open("score.html","_self");
			}, function myError(response) {
			console.log(response.statusText);
//			window.open("register.html","_self");
		});
//	window.open("score.html","_self");
	}
});
