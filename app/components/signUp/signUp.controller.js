'use strict'

app.controller('signUpCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.users = []

  $http.get('api-rest-js.herokuapp.com/api/clients')
  .success(function (data) {
    console.log(data)
    $scope.users = data
  })

  $scope.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  $scope.addUser = function () {
    $http.post('https://api-rest-js.herokuapp.com/api/clients', {
      firstName: $scope.user.firstName,
      lastName: $scope.user.lastName,
      email: $scope.user.email,
      password: $scope.user.password
    })
    .success(function (data, status, headers, config) {
      console.log(data)
      $scope.users.push(data)
      $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    })
    .error(function (error, status, headers, config) {
      console.log('Surgio un error: ' + error)
    })
  }
}])
