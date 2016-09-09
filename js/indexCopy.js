	var app = angular.module('myApp', []);
	var lat=0.0;
	var long=0.0;
	var timestamp=0.0;
	app.controller('myCtrl', function($scope) {
	$scope.getPosition = function() {

		var options = {
		enableHighAccuracy: true,
		maximumAge: 3600000
		}
	
		var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

	function onSuccess(position) {
		lat=position.coords.latitude;
		long=position.coords.longitude;
		timestamp=position.timestamp;
//		alert('Latitude: '          + position.coords.latitude          + '\n' +
//       'Longitude: '         + position.coords.longitude         + '\n' +
//        'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
	$scope.getTrashPosition=function(){
	$scope.getPosition();
		if(timestamp>0){
			alert('trash,'+lat+','+long+','+timestamp);
			timestamp=0.0;
		}
	}
	$scope.getRoadDamagedPosition=function(){
	$scope.getPosition();
		if(timestamp>0){
			alert('trash,'+lat+','+long+','+timestamp);
			timestamp=0.0;
		}
	}
	$scope.getNoLightPosition=function(){
	$scope.getPosition();
		if(timestamp>0){
			alert('trash,'+lat+','+long+','+timestamp);
			timestamp=0.0;
		}
	}
	$scope.getAccidentPosition=function(){
	$scope.getPosition();
		if(timestamp>0){
			alert('trash,'+lat+','+long+','+timestamp);
			timestamp=0.0;
		}
	}
});
