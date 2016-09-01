'use strict';
angular.module('app').controller('HomeController', function($scope, dataService, $sce){

    $scope.data = [];
    $scope.rate = 0;
    $scope.sortBy = [
      {value: "title", label:"By name [a-z]", reverse: false},
      {value: "title", label:"By name [z-a]", reverse: true},
      {value: "price", label:"By price [0-10]", reverse: false},
      {value: "price", label:"By price [10-0]", reverse: true}
    ];

    dataService
      .get("products.json")
      .then(
          function(response) {
              $scope.data = response.data;
          },
          function(error) {
              return "It seems that your network has some issue! Please check it then try again!";
          }
      )

    $scope.saveRate = function(id, val){
      if(val == 0) return false;
      console.log("You have just rated "+val+" "+((val > 1)?'stars':'star')+" for "+id);
    }

  $scope.reverse = true;
  $scope.displayImg = "";
  $scope.replaceMainImgBy = function(image){
    $scope.displayImg = image;
  }

  $scope.setSortedBy = function(sorted){
    $scope.sortedBy = $scope.sortBy[sorted].value;
  }
  $scope.setReverse = function(bool){
    $scope.reverse = $scope.sortBy[bool].reverse;
  }
  $scope.hover = function(product) {
    product.isHover = true;
    console.log(product);
  }
  $scope.leaveHover = function(product) {
    product.isHover = false;
    $scope.displayImg = "";
  }
})
