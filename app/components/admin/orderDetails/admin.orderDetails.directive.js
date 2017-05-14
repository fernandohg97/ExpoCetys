'use strict';

/**
 * Created by J. Pichardo on 5/12/17.
 */

app.directive('orderDetails', [function () {
    return {
        restrict: 'E',
        templateUrl: 'components/admin/orderDetails/admin.orderDetails.view.html'
    }
}]);
app.controller('adminOrderDetailsCtrl', ['$scope', function ($scope) {

    $scope.orderStatusOptions = [
        {
            name: 'Pendiente de envio',
            value: 'shippingPendant'

        },
        {
            name: 'Cancelada',
            value: 'cancelled'

        },
        {
            name: 'Enviada',
            value: 'shipped'
        }];

    $scope.orderModel.details.forEach(x => {
        x.subTotal = x.product.unitPrice * x.quantity;
    })

}]);