const express = require('express');

const app = express();

const shopRoutes = require('./routes/shop');

app.get('/products', (req, res, next) => {
    res.send("<h1>Products Page</h1>");
})

app.get('/cart', (req, res, next) => {
    res.send("<h1>My Cart</h1>");
})

app.use(shopRoutes);

app.listen(3000);