'use strict'

app.controller('shoppingCartCtrl', ['$scope', function ($scope) {
  $scope.products = [
    {
      cover: '../../assets/img/gsw.png',
      description: 'Whey Protein',
      quantity: 2,
      price: 20,
      totalPrice: 40
    },
    {
      cover: '../../assets/img/gsw.png',
      description: 'Whey Protein',
      quantity: 2,
      price: 20,
      totalPrice: 40
    },
    {
      cover: '../../assets/img/gsw.png',
      description: 'Whey Protein',
      quantity: 2,
      price: 20,
      totalPrice: 40
    },
    {
      cover: '../../assets/img/gsw.png',
      description: 'Whey Protein',
      quantity: 2,
      price: 20,
      totalPrice: 40
    }
  ]
}])
