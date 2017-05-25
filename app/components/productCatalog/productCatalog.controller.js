'use strict'

app.controller('productCatalogCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  $scope.searchQuery = ''

  $http.get('https://api-rest-js.herokuapp.com/api/products/')
    .then(function (response) {
      $scope.catalog = response.data
    })

  // $http.get('https://api-rest-js.herokuapp.com/api/products/:product_id')
  //   .then(function (response) {
  //     $scope.productId = response.data
  //   })
  //
  // $scope.getProductId = function () {
  //   $http.get('https://api-rest-js.herokuapp.com/api/products/:product_id', {
  //     idProduct: $scope.productId
  //   })
  // }
}
])
