$.support.cors = true;
function onLoad(){
}
var app = angular.module('myApp', []);
app.controller('myCtrl',  function($scope,$http) {
$scope.thisweekcredit=localStorage.getItem("thisweekcredit");
$scope.lastweekcredit=localStorage.getItem("lastweekcredit");
$scope.date=$scope.date = new Date();
//var logtime=new Date();
//logtime=(logtime/1000)+10;
//localStorage.setItem("logtime",0); 10 in above line is to add 10 sec gap between each refresh , and this 0 can be set at time of initial settings
//if(localStorage.getItem("logtime")<((new Date())/1000)){
//localStorage.setItem("logtime",logtime);
//console.log("time Over");
//}else{
//localStorage.setItem("logtime",logtime);
//console.log("Time Not Over");
//}
});
