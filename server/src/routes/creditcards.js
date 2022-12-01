const { Router } = require('express');
const router = Router();
const CreditCardController = require('../controllers/CreditCardControllers')

router.get('/', CreditCardController.getCreditCard)
router.get('/:id', CreditCardController.getCreditCardId)
router.post('/', CreditCardController.postCreditCard)
router.put('/:id', CreditCardController.putCreditCard)
router.delete('/:id', CreditCardController.deleteCreditCard)

module.exports = router;