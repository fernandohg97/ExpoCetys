'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('goCenter', [
    'ui.router',
    'ui.materialize',
    'ngMap'
]);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/admin');
    $locationProvider.html5Mode(true);

    var adminState = {
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
    };

    $stateProvider.state(adminState);
    $stateProvider.state(adminOrderManagerState);
    $stateProvider.state(adminProductManagerState);
    $stateProvider.state(adminPromotionManagerState);

}]);
