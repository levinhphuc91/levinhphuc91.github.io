'use strict'; //Using a variable without declaring it, is not allowed.
var $viewPathRoot = 'partials';
angular.module('app', ['ui.bootstrap', 'ui.router'])

//.run(function($rootScope, $window, $stranslate, $css){
//    // Change theme, language
//})

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $state.transitionTo('root.home');
}])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('root',{
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'partials/widgets/header.html',
          controller: 'HeaderController'
        },
        'footer':{
          templateUrl: 'partials/widgets/footer.html',
          controller: "FooterController"
        }
      }
    })
    
    .state('root.home', {
      url: '/index.html',
      views:{
          "@":{
              controller: 'HomeController',
              templateUrl: 'partials/home.html'
          }
      }
    })
    
    .state('root.detail', {
      url: '/detail.html',
      views:{
          "@":{
              controller: 'DetailController',
              templateUrl: 'partials/detail.html'
          }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/index.html');
  
  //check browser support
  if(window.history && window.history.pushState){
    //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">
    // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
   // if you don't wish to set base URL then use this
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
});