var app = angular.module('myApp', []);
app.controller('myCtrla', function($scope) {
    $scope.gi = [
        {
            gia: 27000000
        }
    ]

    $scope.Tongtien = function() {
       var a = $scope.gi.gia * $scope.sl;
       return a;
    }
     
  });