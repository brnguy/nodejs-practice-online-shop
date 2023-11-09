const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');

router.get('/products', productsController.addProducts);

router.get('/cart', cartController.getCart);

module.exports = router;