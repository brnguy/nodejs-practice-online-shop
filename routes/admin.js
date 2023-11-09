const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products');

router.get('/products', productsController.getAllProducts);

router.get('/cart', (req, res, next) => {
    res.render('cart', {
        pageTitle: 'My Cart'
    });
})

module.exports = router;