var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $http.get('http://localhost:3000/Carousel')
    .then(function(response) {
      $scope.Carousel = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl1', function($scope, $http) {
    $http.get('http://localhost:3000/ChinhSach')
      .then(function(response) {
        $scope.ChinhSach = response.data;
    })
      .catch(function(error) {
        console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrlkm', function($scope, $http) {
  $http.get('http://localhost:3000/KhuyenMai')
    .then(function(response) {
      $scope.KhuyenMai = response.data;
  })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
  });
});


app.controller('myCtrl3', function($scope, $http) {
    $http.get('http://localhost:3000/ChiTiet')
      .then(function(response) {
        $scope.ChiTiet = response.data;
    })
      .catch(function(error) {
        console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl4', function($scope, $http) {
    $http.get('http://localhost:3000/MuaCung')
      .then(function(response) {
        $scope.MuaCung = response.data;
    })
      .catch(function(error) {
        console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl5', function($scope, $http) {
    $http.get('http://localhost:3000/Footer')
      .then(function(response) {
        $scope.Footer = response.data;
    })
      .catch(function(error) {
        console.error('Lỗi khi tải dữ liệu:', error);
    });
});