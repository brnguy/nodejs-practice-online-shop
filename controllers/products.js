exports.getAllProducts = (req, res, next) => {
    res.render('shop', {
        pageTitle: 'Home Page'
    });
};

exports.addProducts = (req, res, next) => {
    res.render('products', {
        pageTitle: 'Add Products'
    })
}