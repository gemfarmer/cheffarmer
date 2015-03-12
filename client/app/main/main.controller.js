'use strict';

angular.module('cheffarmerApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.isFarmer = Auth.isFarmer;
    $scope.isChef = Auth.isChef;


    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
