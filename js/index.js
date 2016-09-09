	var app = angular.module('myApp', []);
	var lat=0.0;
	var long=0.0;
	var timestamp=0.0;
	app.controller('myCtrl', function($scope) {
	$scope.domain=localStorage.getItem("domain");
	if(localStorage.getItem("phone") != undefined){
		var phone = localStorage.getItem("phone");
	}else{
	window.open("login.html","_self");
	}
	$scope.getPosition = function(myissue) {
		var options = {
		enableHighAccuracy: true,
		maximumAge: 3600000
		}
	
		var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	function onSuccess(position) {
		lat=position.coords.latitude;
		long=position.coords.longitude;
		timestamp=position.timestamp;
		console.log(timestamp);
		var myurl=localStorage.getItem("domain");
		myurl=myurl+"/"+"mycity/iwilltrack/";
		console.log(myurl);	
//		$.ajaxSetup({
//			headers: {'Authorization': "Basic admin:potterkk"}
//		});
		$.ajax({
			url: myurl,
			type:"POST",
			data: {"category": myissue, "latitude":lat,"longitude":long,"timestamp":timestamp/1000},
			dataType: 'json',
			success: function(data){
			console.log(data);
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
//	$scope.getTrashPosition=function(){
//	$scope.getPosition('garbage');
//	$scope.addCredit("userphone"); add user credit separately
//	}
});
