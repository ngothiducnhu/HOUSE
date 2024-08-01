var app = angular.module('myApp', []);

app.controller('myCtrl1', function($scope, $http) {
  $http.get('http://localhost:3000/DScarousel')
    .then(function(response) {
      $scope.DScarousel = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});
app.controller('myCtrl2', function($scope, $http) {
  $http.get('http://localhost:3000/DSTT')
    .then(function(response) {
      $scope.DSTT = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});