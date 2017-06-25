'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('goCenter', [
    'ui.router',
    'ui.materialize',
    'angularCSS',
    'ngMap'
]);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/admin');
    $locationProvider.html5Mode(true);

    let adminState = {
        name: 'admin',
        url: '/admin',
        templateUrl: 'components/admin/admin.view.html',
        controller: 'adminCtrl'
    }, adminOrderManagerState = {
        name: 'adminOrderManager',
        url: '/orders',
        templateUrl: 'components/admin/orderManager/admin.orderManager.view.html',
        controller: 'adminOrderManagerCtrl',
        parent: 'admin'
    }, adminProductManagerState = {
        name: 'adminProductManager',
        url: '/products',
        templateUrl: 'components/admin/productManager/admin.productManager.view.html',
        controller: 'adminProductManagerCtrl',
        parent: 'admin'
    }, adminPromotionManagerState = {
        name: 'adminPromotionManager',
        url: '/promotions',
        templateUrl: 'components/admin/promotionManager/admin.promotionManager.view.html',
        controller: 'adminPromotionManagerCtrl',
        parent: 'admin'
    }, homeState = {
        name: 'home',
        url: '/',
        templateUrl: './components/home/home.view.html',
        controller: 'homeCtrl',
        css: './components/home/foundation.css'
    }, productCatalogState = {
        name: 'productCatalog',
        url: '/products',
        templateUrl: './components/productCatalog/productCatalog.view.html',
        controller: 'productCatalogCtrl',
        parent: 'home'
    }, productDetailsState = {
        name: 'productDetails',
        url: '/product/:_id',
        templateUrl: './components/productDetails/productDetails.view.html',
        controller: 'productDetailsCtrl',
        parent: 'home',
        css: 'assets/css/productDetails.style.css'
    }, contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: './components/contact/contact.view.html',
        controller: 'contactCtrl',
        parent: 'home',
        css: 'assets/css/contact.style.css'
    }, shoppingCartState = {
        name: 'shoppingCart',
        url: '/cart',
        templateUrl: './components/shoppingCart/shoppingCart.view.html',
        controller: 'shoppingCartCtrl',
        parent: 'home',
        css: 'assets/css/shoppingCart.style.css'
    }, locationState = {
        name: 'location',
        url: '/sucursales',
        templateUrl: './components/locations/location.view.html',
        controller: 'locationCtrl',
        parent: 'home',
        css: 'assets/css/location.style.css'
    }, promotionsState = {
       name: 'promotions',
       url: '/promociones',
       templateUrl: './components/promotions/promotions.view.html',
       controller: 'promotionsCtrl',
       parent: 'home',
       css: 'assets/css/promotions.style.css'
    }, registerState = {
       name: 'signUp',
       url: '/registro',
       templateUrl: './components/signUp/signUp.view.html',
       controller: 'signUpCtrl',
       parent: 'home'
    }, loginState = {
      name: 'login',
      url: '/login',
      templateUrl: './components/login/login.view.html',
      controller: 'loginCtrl',
      parent: 'home'
    }, checkoutState = {
      name: 'checkout',
      url: '/checkout',
      templateUrl: './components/checkout/checkout.view.html',
      controller: 'checkoutCtrl',
      parent: 'home'
    }

    $stateProvider.state(adminState);
    $stateProvider.state(adminOrderManagerState);
    $stateProvider.state(adminProductManagerState);
    $stateProvider.state(adminPromotionManagerState);
    $stateProvider.state(homeState);
    $stateProvider.state(productCatalogState);
    $stateProvider.state(productDetailsState);
    $stateProvider.state(contactState);
    $stateProvider.state(shoppingCartState)
    $stateProvider.state(locationState)
    $stateProvider.state(promotionsState)
    $stateProvider.state(registerState)
    $stateProvider.state(loginState)
    $stateProvider.state(checkoutState)
}]);
