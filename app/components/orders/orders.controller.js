'use strict'

app.controller('ordersCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  $scope.searchOrders = ''
  $scope.searchValue = ''
  // console.log($scope.searchValue)
  var search = document.getElementById('opciones')
  console.log(search.value)

  search.addEventListener('change', function () {
    console.log(search.value)
  })

  $http.get('https://api-rest-js.herokuapp.com/api/orders')
  .then(function (response) {
    $scope.orders = response.data
    console.log($scope.orders)
    $scope.details = []
    for (var x in $scope.orders) {
      $scope.productsOrder = $scope.orders[x].details
      $scope.details.push($scope.productsOrder)
    }
    console.log($scope.details)
  })
  .catch(err => {
    console.log(`Error al obtener los pedidos de la BD: ${JSON.stringify(err)}`)
  })
}])
