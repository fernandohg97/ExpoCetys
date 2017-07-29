'use strict'

app.controller('shoppingCartCtrl', ['$scope', '$http', function ($scope, $http) {
  if (localStorage.getItem('productos') !== null) {
    $scope.shoppingCart = JSON.parse(localStorage.getItem('productos')) || []
  } else {
    localStorage.clear()
    $scope.shoppingCart = []
    emptyCartView()
  }

  function emptyCartView () {
    var tableElement = document.getElementById('shoppingCartProducts')
    document.getElementById('buttonGroup').style.display = 'none'
    document.getElementById('titleCart').style.marginBottom = '40px'
    // Create div element
    var replaceElement = document.createElement('DIV')
    replaceElement.setAttribute('class', 'row expanded')
    var replaceElement2 = document.createElement('DIV')
    replaceElement2.setAttribute('class', 'small-10 small-centered medium-6 text-center columns')

    // Create image element
    var cartIcon = document.createElement('IMG')
    cartIcon.setAttribute('src', 'assets/img/shopping-cart.png')
    cartIcon.style.margin = 'auto'
    cartIcon.style.display = 'block'
    cartIcon.style.width = '270px'
    cartIcon.style.height = '200px'
    // Create paragraph element
    var replaceTitle = document.createElement('P')
    var msg = document.createTextNode('El carrito esta vacío.')
    replaceTitle.appendChild(msg)
    replaceTitle.style.color = 'grey'
    replaceTitle.style.textAlign = 'center'
    replaceTitle.style.fontSize = '50px'
    replaceTitle.style.padding = '10px'
    replaceTitle.style.marginTop = '20px'

    var goToProducts = document.createElement('A')
    goToProducts.setAttribute('class', 'button')
    goToProducts.textContent = 'Ir al catálogo'
    goToProducts.style.color = '#000000'
    goToProducts.style.backgroundColor = '#cedc41'
    goToProducts.style.borderRadius = '10px'
    goToProducts.addEventListener('mouseover', mouseOver)
    goToProducts.addEventListener('mouseout', mouseOut)
    function mouseOver () {
      goToProducts.style.backgroundColor = '#14679e'
      goToProducts.style.color = '#ffffff'
    }
    function mouseOut () {
      goToProducts.style.backgroundColor = '#cedc41'
      goToProducts.style.color = '#000000'
    }
    replaceElement2.appendChild(cartIcon)
    replaceElement2.appendChild(replaceTitle)
    replaceElement2.appendChild(goToProducts)
    replaceElement.appendChild(replaceElement2)
    replaceElement.style.marginBottom = '30px'
    tableElement.parentNode.replaceChild(replaceElement, tableElement)
  }

  $scope.removeProduct = function (product) {
    for (var x in $scope.shoppingCart) {
      if ($scope.shoppingCart[x] === product) {
        $scope.shoppingCart.splice(x, 1)
        localStorage.setItem('productos', JSON.stringify($scope.shoppingCart))
        break
      }
    }
    if ($scope.shoppingCart.length === 0) {
      $scope.shoppingCart = null
      // cart = []
      localStorage.clear()
      emptyCartView()
    }
  }

  $scope.orders = []
  $http.get('https://api-rest-js.herokuapp.com/api/orders')
  .success(function (data) {
    $scope.orders.push(data)
  })

  class Order {
    constructor (details, orderDate, deliveryDate) {
      this.details = details
      this.orderDate = orderDate
      this.deliveryDate = deliveryDate
    }
  }

  $scope.addOrder = function (shoppingCart) {
    let details = []
    for (var x in shoppingCart) {
      // var a = new DetailsOrder(shoppingCart[x].name, shoppingCart[x].unitPrice, shoppingCart[x].servings, shoppingCart[x].discountPercentage, shoppingCart[x].quantity)
      var order = {
        product: {
          name: shoppingCart[x].name,
          unitPrice: shoppingCart[x].unitPrice,
          presentation: {
            servings: shoppingCart[x].servings,
            discountPercentage: shoppingCart[x].discountPercentage
          }
        },
        quantity: shoppingCart[x].quantity
      }
      details.push(order)
    }
    // day/month/year
    var orderCreate = new Order(details, new Date(), new Date())

    $http.post('https://api-rest-js.herokuapp.com/api/orders', orderCreate)
      .success(function (data, status, headers, config) {
        console.log(data)
        $scope.orders.push(data)
      })
      .error(function (error, status, headers, config) {
        console.log('Surgió un error' + JSON.stringify(error))
      })
  }
}])
