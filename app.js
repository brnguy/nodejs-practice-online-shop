const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

app.listen(3000);