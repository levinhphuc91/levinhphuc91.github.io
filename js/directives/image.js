'use strict';
angular.module('app')
.directive('img', function ($q) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            attrs.$observe('ngSrc', function (ngSrc) {
                var deferred = $q.defer();
                var image = new Image();
                image.onerror = function () {
                    deferred.resolve(false);
                    element.attr('src','asset/image/default-image.png'); // set default image
                };
                image.onload = function () {
                    deferred.resolve(true);
                };
                if (!ngSrc) {
                    element.attr('src','asset/image/default-image.png'); // set default image
                }
                image.src = ngSrc;
                return deferred.promise;
            });
        }
    };
})

.directive('errSrc', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', "http://i425.photobucket.com/albums/pp332/jerrybk108/default-image_zpsumhzvilc.png");  
          }
      });

      element.bind('error', function() {
        element.attr('src', "http://i425.photobucket.com/albums/pp332/jerrybk108/default-image_zpsumhzvilc.png");
      });
    }
  }
});