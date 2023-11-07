const express = require('express');

const router = express.Router();

router.get('/products', (req, res, next) => {
    res.render('products', {
        pageTitle: 'Products'
    });
})

router.get('/cart', (req, res, next) => {
    res.render('cart', {
        pageTitle: 'My Cart'
    });
})

module.exports = router;