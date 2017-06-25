'use strict'

app.controller('locationCtrl', ['$scope', 'NgMap', function ($scope, NgMap) {
  // $scope.googleMapsUrl = "https://maps.google.com/maps/api/js?key=AIzaSyDRHFpsgjPgUrpiixZXKIvh7TwK6fhwHms"
  NgMap.getMap().then(function (map) {
    // console.log(map.getCenter())
    // console.log('markers', map.markers)
  })
}
])
