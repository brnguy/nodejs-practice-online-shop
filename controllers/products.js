exports.getAllProducts = (req, res, next) => {
    res.render('products', {
        pageTitle: 'Products'
    })
};