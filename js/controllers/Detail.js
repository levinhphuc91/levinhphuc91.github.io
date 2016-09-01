'use strict';
angular.module('app')
  .controller('DetailController', function($scope, dataService, $state, $location){

  $scope.showed = false;
  var $id = $location.search().id;
  if($id === undefined || $id == 0)
    $state.go("root.home");
  dataService
      .get("products.json")
      .then(
          function(response) {
              // console.log(response.data);
              for(var $i = 0; $i < response.data.length; $i++){
                if(response.data[$i].id == $id){
                  $scope.data = response.data.slice($i,$i+1)[0];
                }
              }
          },
          function(error) {
              return "It seems that your network has some issue! Please check it then try again!";
          }
      )
  $scope.displayImg = "";
  $scope.replaceMainImgBy = function(image){
    $scope.displayImg = image;
  }

    
})