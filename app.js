const express = require('express');

const app = express();

app.get('/products', (req, res, next) => {
    res.send("<h1>Products Page</h1>");
})

app.get('/cart', (req, res, next) => {
    res.send("<h1>My Cart</h1>");
})

app.get('/', (req, res, next) => {
    res.send("<h1>Index</h1>");
})

app.listen(3000);