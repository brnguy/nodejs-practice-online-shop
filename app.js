const express = require('express');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);