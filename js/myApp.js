var myApp = angular.module('myApp', ['ui.router']);

myApp.directive('inittoggle', function () {
    return function(scope, element, attrs) {
        scope.initeditpopup(element,attrs);
    };
});
myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    url: '/home',
    templateUrl: 'home_testing.html',
    controller: 'RootCtrl'
  }).state('dashboard', {
    url: '/dashboard',
    templateUrl: 'home_testing.html',
    controller: 'DashBoardCtrl'
  });




}).run(function($rootScope,$state) {
});


