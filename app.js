const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);