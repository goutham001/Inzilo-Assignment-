const userModel = require('../models').user;
const orderModel = require('../models').order;
const envelop = require('../util/envelope');
module.exports = {
    findAllOrder(req, res) {
        orderModel.findAll({
            include: {
                model: userModel,
                as: 'userOrder'
            }
        }).then(orders => {
            if (orders.length > 0) {
                res.send(envelop.wrapSuccess(orders, 'Success'));
            }
            else
                res.send(envelop.wrapNoContent('no order found'));
        })
            .catch(err => { res.send(envelop.wrapError(err)) });
    },
    //find all order by (pending,placed,cancelled)
    findOrdersByType(req, res) {
        orderModel.findAll({
            include: {
                model: userModel,
                as: 'userOrder'
            },
            where: { status: req.query.type }
        }).then(orders => {
            if (orders.length > 0)
                res.send(envelop.wrapSuccess(orders, 'success'))
            else
                res.send(envelop.wrapNotAcceptable('failed'))
        })
            .catch(err => { res.send(envelop.wrapError(err)) });
    },

    placeOrder(req, res) {
        orderModel.create(req.body).then(order => {
            if (order)
                res.send(envelop.wrapSuccess(order, 'success'))
            else
                res.send(envelop.wrapNotAcceptable('order placed failed'))
        })
            .catch(err => { res.send(envelop.wrapError(err)) });
    },
    //either you can accept or reject order
    orderApproval(req, res) {
        orderModel.update({
            status: req.query.status
        }, {
            where: { id_pk: req.query.order_id }
        }
        ).then(updated => {
            if (updated)
                res.send(envelop.wrapSuccess(updated, 'success'))
            else
                res.send(envelop.wrapNotAcceptable('failed'))
        })
            .catch(err => { res.send(envelop.wrapError(err)) });
    }
}