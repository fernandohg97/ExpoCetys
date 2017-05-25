'use strict'

app.controller('productDetailsCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  $scope.productId = $stateParams._id
  console.log($scope.productId)

  $http.get('https://api-rest-js.herokuapp.com/api/products/' + $scope.productId)
  .then(function (response) {
    $scope.dataProduct = response.data
    console.log($scope.dataProduct)
    console.log($scope.dataProduct.name)
    console.log($scope.dataProduct.presentations[0].servings)
  })

  // $scope.products = [
  //   {
  //     name: 'Whey Protein',
  //     description: 'Proteina marca Whey',
  //     unitPrice: 30,
  //     presentations: [
  //       {
  //         servings: 50,
  //         discount: {
  //           percentage: 0,
  //           expirationDate: '20/05/2017'
  //         },
  //         availability: 'InStock',
  //         availableDate: '15/05/2017'
  //       }
  //     ]
  //   }
  // ]
}])
