'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http) {
    var pendingTask;

    $scope.change = function() {
      if ($scope.search != "")
      {   
          fetch();
      }
      else
        {

        }
    };

    function fetch() {
      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
        .success(function(response) {
          $scope.related = response;
        });
    }

    $scope.enter = function(e) {

    if (e.keyCode == 13) {
        loadItems($scope.mysearch);
    }
}

    function empty() {
      if ($scope.search == "")
          return true;
    }

    $scope.update = function(movie) {
      $http.get("http://www.omdbapi.com/?t=" + movie.Title)
        .success(function(response) {
          $scope.details = response;
        });

    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });