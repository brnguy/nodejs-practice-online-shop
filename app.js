const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

app.listen(3000);