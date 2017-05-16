'use strict'

app.controller('productCatalogCtrl', ['$scope', function ($scope) {
  $scope.catalog = [
    {
      name: 'Whey Protein',
      unitPrice: 20,
      cover: 'assets/img/gsw.png'
    },
    {
      name: 'BCAAs',
      unitPrice: 10,
      cover: 'assets/img/gsw.png'
    },
    {
      name: 'Omega 3',
      unitPrice: 50,
      cover: 'assets/img/gsw.png'
    },
    {
      name: 'Organic Protein',
      unitPrice: 30,
      cover: 'assets/img/gsw.png'
    }
  ]
}])
