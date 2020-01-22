const userController = require('../controller/user.controller');
const orderController = require('../controller/order.controller');
module.exports = (app) => {
    //user
    app.post('/user/register', userController.registerUser);
    app.get('/user/find_all', userController.findAll);

    //order
    app.get('/order/get_all',orderController.findAllOrder);
    app.post('/order/place',orderController.placeOrder);
    app.put('/order/get_approval',orderController.orderApproval);
    app.get('/order/get_by_type',orderController.findOrdersByType);
}