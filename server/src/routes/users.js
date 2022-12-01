const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/UserControllers')
const AuthController = require('../controllers/AuthController')
const onsession = require('../middlewares/onsession')

router.get('/', UserController.getUser)
router.get('/:id', UserController.getUserId)
router.post('/', UserController.postUser)
router.post('/register', UserController.postUser)
router.post('/login', AuthController.loginAuthController)
router.put('/:id', UserController.putUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router; 