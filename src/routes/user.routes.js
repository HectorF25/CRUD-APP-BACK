const express = require('express');

const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', UserController.findAll);
router.post('/register', UserController.create);
router.put('/update/:userId', UserController.update);
router.get('/:userId', UserController.findOne);
router.put('/activate/:userId', UserController.active);
router.put('/inactivate/:userId', UserController.inactive);


module.exports = router;