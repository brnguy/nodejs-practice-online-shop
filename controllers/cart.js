exports.getCart = (req, res, next) => {
    res.render('cart', {
        pageTitle: 'My Cart'
    })
}; 