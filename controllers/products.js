exports.getAllProducts = (req, res, next) => {
    res.render('shop', {
        pageTitle: 'Home Page'
    });
};

exports.addProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: 'admin/add-product'
    })
}