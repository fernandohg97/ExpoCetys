'use strict';

/**
 * Created by J. Pichardo on 5/12/17.
 */
app.controller('adminOrderManagerCtrl', ['$scope', function ($scope) {

    let formatAddress = function (address) {

        return address.street1 + ' ' + address.street2 + ' ' +
            address.postalCode + ' ' + address.city + ', ' + address.state;

    }

    $scope.sortOptions = [
        {
            name: 'Ninguno',
            property: '',
        },
        {
            name: 'Fecha',
            property: 'orderDate',
        },
        {
            name: 'Total',
            property: 'total'
        }
    ];

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

    $scope.orders = [
        {
            orderDate: Date.now(),
            deliveryDate: Date.now(),
            details: [{
                product: {
                    name: "Producto 1",
                    unitPrice: 12,
                    presentations: {
                        servings: 12,
                        discountPercentage: 0.1
                    }
                },
                quantity: 10
            }],
            status: $scope.orderStatusOptions[0],
            client: {
                firstName: "Cliente",
                lastName: "1",
                email: "client@gocenter.com",
                address: {
                    street1: "Street 1",
                    street2: "Street 2",
                    postalCode: "PostalCode",
                    city: "City",
                    state: "State"
                }
            }
        },
        {
            orderDate: Date.UTC(1959, 15, 15),
            deliveryDate: Date.now(),
            details: [{
                product: {
                    name: "Producto 1",
                    unitPrice: 12,
                    presentations: {
                        servings: 12,
                        discountPercentage: 0.1
                    }
                },
                quantity: 10
            }],
            status: 'Pendiente',
            client: {
                firstName: "Cliente",
                lastName: "1",
                email: "client@gocenter.com",
                address: {
                    street1: "Street 1",
                    street2: "Street 2",
                    postalCode: "PostalCode",
                    city: "City",
                    state: "State"
                }
            }
        },
        {
            orderDate: Date.UTC(1895, 32, 32),
            deliveryDate: Date.now(),
            details: [{
                product: {
                    name: "Producto 1",
                    unitPrice: 12,
                    presentations: {
                        servings: 12,
                        discountPercentage: 0.1
                    }
                },
                quantity: 10
            }],
            status: 'Pendiente',
            client: {
                firstName: "Cliente",
                lastName: "1",
                email: "client@gocenter.com",
                address: {
                    street1: "Street 1",
                    street2: "Street 2",
                    postalCode: "PostalCode",
                    city: "City",
                    state: "State"
                }
            }
        },
        {
            orderDate: Date.UTC(2005, 12, 12),
            deliveryDate: Date.now(),
            details: [{
                product: {
                    name: "Producto 1",
                    unitPrice: 12,
                    presentations: {
                        servings: 12,
                        discountPercentage: 0.1
                    }
                },
                quantity: 10
            }],
            status: 'Pendiente',
            client: {
                firstName: "Cliente",
                lastName: "1",
                email: "client@gocenter.com",
                address: {
                    street1: "Street 1",
                    street2: "Street 2",
                    postalCode: "PostalCode",
                    city: "City",
                    state: "State"
                }
            }
        }
    ];

    $scope.openModal = false;

    $scope.showOrderModal = order => {
        $scope.selectedOrder = order;
        $scope.openModal = true;
    }

    $scope.orders.forEach(order => {

        order.total = order.details.map(x => {
            let unitPrice = x.product.unitPrice;

            let productSubtotal = unitPrice - (unitPrice * x.product.presentations.discountPercentage);

            return x.quantity * productSubtotal;
        }).join((x, y) => x + y);
        order.details.forEach(x => {
            x.subTotal = x.product.unitPrice * x.quantity;
        });
        order.client.formattedAddress = formatAddress(order.client.address);
        order.client.fullName = order.client.firstName + ' ' + order.client.lastName;
    });


}]);
