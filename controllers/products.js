const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('products', {
        pageTitle: 'Home Page',
        prods: products,
        path: '/',
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);
    product.save();
    res.redirect('/');
}