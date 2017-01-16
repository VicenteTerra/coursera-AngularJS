(function(){
  'user strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunch = "";
  $scope.msg = "";
  $scope.status = 0;

  $scope.check = function (){
    if($scope.lunch === ""){
        $scope.msg = "Please enter data first!";
        $scope.status = 1;
    }
    else{
      $scope.status = 2;
      var  count = $scope.lunch.split(",");

      if(count.length <= 3){
      $scope.msg = "Enjoy!";
      }
      else{
      $scope.msg = "Too much!";
      }
  }
  }

}


})();
