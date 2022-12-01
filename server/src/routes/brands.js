const { Router } = require('express');
const router = Router();
const BrandController = require('../controllers/BrandControllers')

router.get('/', BrandController.getBrand)
router.get('/:id', BrandController.getBrandId)
router.post('/', BrandController.postBrand)
router.put('/:id', BrandController.putBrand)
router.delete('/:id', BrandController.deleteBrand)

module.exports = router;