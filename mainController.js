angular.module("app").controller("MainController",MainController)

function MainController($scope,$timeout)
{
  var numberOfSelfies= 15;
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);
  
  
  $timeout(function(){
    $scope.selfieVisible =true;
    var index= fullDaysSinceEpoch % numberOfSelfies;
    $scope.selfiePath = "img/selfie_" + index.toString() + ".png";
    
  },2000);
  
}