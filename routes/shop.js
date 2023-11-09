const path = require('path');
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');

router.get('/', productsController.getAllProducts);

router.get('/cart', cartController.getCart);

module.exports = router;