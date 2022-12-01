const { Router } = require('express');
const router = Router();
const ProductController = require('../controllers/ProductControllers')

router.get('/', ProductController.getProduct)
router.get('/:id', ProductController.getProductId)
router.post('/', ProductController.postProduct)
router.put('/:id', ProductController.putProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router;