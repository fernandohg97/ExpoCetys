'use strict'

app.controller('productCatalogCtrl', ['$scope', '$http', '$stateParams', '$log', function ($scope, $http, $stateParams, $log) {
  $scope.searchQuery = ''
  $scope.limitProducts = []
  $scope.currentPage = 1
  $scope.numberProductPerPage = 5

  $http.get('https://api-rest-js.herokuapp.com/api/products/')
    .then(response => {
      $scope.catalog = response.data
      $scope.limitProducts = $scope.catalog
      $scope.totalItems = $scope.catalog.length * 2
      // console.log($scope.totalItems)
      $scope.numPages = Math.ceil($scope.catalog.length / $scope.numberProductPerPage)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })

    // $scope.setPage = function (pageNo) {
    //   $scope.currentPage = pageNo;
    // }

  $scope.pageChanged = function (currentPage) {
    $log.log('Page changed to: ' + currentPage)
    let begin = (currentPage - 1) * $scope.numberProductPerPage
    let end = begin + $scope.numberProductPerPage

    $scope.limitProducts = $scope.catalog.slice(begin, end)
  }

  // $scope.changeProducts = function () {
  //   $log.log('Page changed to: ' + $scope.currentPage)
  // }
}])
