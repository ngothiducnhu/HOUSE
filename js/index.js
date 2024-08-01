var app = angular.module('myApp', []);

app.controller('myCtrl0', function($scope, $http) {
  $http.get('http://localhost:3000/Carousel')
    .then(function(response) {
      $scope.Carousel = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl', function($scope, $http) {
  // Gọi API sử dụng $http
  $http.get('http://localhost:3000/Text')
    .then(function(response) {
      // Xử lý dữ liệu từ API
      $scope.Text = response.data;
    })
    .catch(function(error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl1', function($scope, $http) {
  $scope.cart = [];

  
  $scope.themgio = function(sp) {
    var index = $scope.cart.findIndex(p => p.id==sp.id);

    if(index>=0) {
      $scope.cart[index].soluong++;
    //   document.getElementById("sl").innerHTML=soluong++;
    }else{
      var spInCart = {id:sp.id, tensp:sp.tensp, gia:sp.gia, hinh:sp.hinh, soluong:1}
      $scope.cart.push(spInCart);   
       document.getElementById("sl").innerHTML=soluong;  
    }
    
    console.log($scope.cart);
   

  }

  $http.get('http://localhost:3000/SanPhamMoi')
    .then(function(response) {
      $scope.SanPhamMoi = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl2', function($scope, $http) {
  $http.get('http://localhost:3000/ChuyenTrangThuongHieu')
    .then(function(response) {
      $scope.ChuyenTrangThuongHieu = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl3', function($scope, $http) {
  $http.get('http://localhost:3000/BanChay')
    .then(function(response) {
      $scope.BanChay = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl4', function($scope, $http) {
  $http.get('http://localhost:3000/TiVi')
    .then(function(response) {
      $scope.TiVi = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl5', function($scope, $http) {
  $http.get('http://localhost:3000/DanhMuc')
    .then(function(response) {
      $scope.DanhMuc = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrl6', function($scope, $http) {
  $http.get('http://localhost:3000/Footer')
    .then(function(response) {
      $scope.Footer = response.data;
    })
    .catch(function(error) {
      console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrlSP_DA', function($scope, $http) {
    $http.get('http://localhost:3000/LoNuongDN')
      .then(function(response) {
        $scope.LoNuongDN = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrlSP_CC', function($scope, $http) {
    $http.get('http://localhost:3000/LoNuongCC')
      .then(function(response) {
        $scope.LoNuongCC = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrlcrsCT', function($scope, $http) {
    $http.get('http://localhost:3000/CarouselCT')
      .then(function(response) {
        $scope.CarouselCT = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});
app.controller('myCtrl_CS', function($scope, $http) {
    $http.get('http://localhost:3000/ChinhSach')
      .then(function(response) {
        $scope.ChinhSach = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});
app.controller('myCtrl_KM', function($scope, $http) {
    $http.get('http://localhost:3000/KhuyenMai')
      .then(function(response) {
        $scope.KhuyenMai = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});
app.controller('myCtrl_CTSP', function($scope, $http) {
    $http.get('http://localhost:3000/ChiTiet')
      .then(function(response) {
        $scope.ChiTiet = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});
app.controller('myCtrl_MC', function($scope, $http) {
    $http.get('http://localhost:3000/MuaCung')
      .then(function(response) {
        $scope.MuaCung = response.data;
    })
    .catch(function(error) {
     console.error('Lỗi khi tải dữ liệu:', error);
    });
});

app.controller('myCtrla', function($scope, $http) {
  $scope.gia = [
      {
          gia: 27000000
      }
  ]
  $scope.Tongtien = function() {
     $scope.gia.gia * $scope.sl;     
  }
   
});

