var myApp = angular.module('myApp');



myApp.controller('RootCtrl', function ($scope) {
  console.log("RootCtrl loaded");

});


myApp.controller('DashBoardCtrl', function ($scope,$http,$templateRequest,$compile,$q,$state) {
  console.log("DashBoardCtrl loaded");
  $scope.$state = $state;
  $scope.test = {};
  
  //get user profile object from server
  $http.get('getUserProfileUrl',{params:{"userId":$scope.currentUserId}}).
      success(function(data, status, headers, config) {
          $scope.userProfile = data;
      }).error(function(data, status, headers, config) {
          $scope.errorMsg = status;
      });
});
