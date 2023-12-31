const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

app.listen(3000);