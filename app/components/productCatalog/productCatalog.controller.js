'use strict'

app.controller('productCatalogCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  $scope.searchQuery = ''
  $scope.limitProducts = []
  $scope.currentPage = 1
  $scope.numberProductPerPage = 6
  $scope.catalog = []

  $http.get('https://api-rest-js.herokuapp.com/api/products/')
    .then(response => {
      $scope.catalog = response.data
      console.log($scope.catalog)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })

  // $scope.numPages = () => {
  //   return Math.ceil($scope.catalog.length / $scope.numberProductPerPage)
  // }
  //
  // $scope.changeProducts = function () {
  //   var begin = (($scope.currentPage - 1) * $scope.numberProductPerPage)
  //   var end = begin + $scope.numberProductPerPage
  //
  //   $scope.limitProducts = $scope.catalog.slice(begin, end)
  // }
}
])
