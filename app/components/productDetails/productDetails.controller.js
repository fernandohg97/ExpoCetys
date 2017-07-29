'use strict'
var cart = []

app.controller('productDetailsCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
  $scope.productId = $stateParams._id

  $http.get('https://api-rest-js.herokuapp.com/api/products/' + $scope.productId)
  .then(function (response) {
    $scope.dataProduct = response.data
  })

  class Product {
    constructor (name, description, unitPrice, servings, discountPercentage, quantity) {
      this.name = name
      this.description = description
      this.unitPrice = unitPrice
      this.servings = servings
      this.discountPercentage = discountPercentage
      this.quantity = quantity
    }
  }

  $scope.addToShoppingCart = function (name, description, unitPrice, servings, discountPercentage) {
    if (localStorage.getItem('productos') !== null) {
      cart = JSON.parse(localStorage.getItem('productos'))
    }
    var quantity = parseInt(document.getElementById('quantityProduct').value)
    if (cart.length >= 1) {
      for (var i in cart) {
        if (name === cart[i].name) {
          cart[i].quantity += quantity
          localStorage.setItem('productos', JSON.stringify(cart))
          return
        }
      }
    }
    var a = new Product(name, description, unitPrice, servings, discountPercentage, quantity)
    cart.push(a)
    localStorage.setItem('productos', JSON.stringify(cart))
    console.log(cart)
    showNumberProducts()
  }

  function showNumberProducts () {
    var msgAdd = document.getElementById('msg-product')
    msgAdd.style.display = 'block'
  }
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
