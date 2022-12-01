const { Router } = require('express');
const router = Router();
const OrderController = require('../controllers/OrderControllers')

router.get('/', OrderController.getOrder)
router.get('/:id', OrderController.getOrderId)
router.post('/', OrderController.postOrder)
router.put('/:id', OrderController.putOrder)
router.delete('/:id', OrderController.deleteOrder)

module.exports = router;