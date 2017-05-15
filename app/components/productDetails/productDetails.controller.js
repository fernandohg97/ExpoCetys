'use strict'

app.controller('productDetailsCtrl', ['$scope', function ($scope) {
  $scope.products = [
    {
      name: 'Whey Protein',
      description: 'Proteina marca Whey',
      unitPrice: 30,
      presentations: [
        {
          servings: 50,
          discount: {
            percentage: 0,
            expirationDate: '20/05/2017'
          },
          availability: 'InStock',
          availableDate: '15/05/2017'
        }
      ]
    }
  ]
}])
