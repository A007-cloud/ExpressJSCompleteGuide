const express = require('express');
const bodyParser = require('body-parser');

// console.log(routes.someText);

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRouters);


app.use((req, res, next) => {
   res.status(404).send('<h1>Page not found 404</h1>');
});

app.listen(3000);

console.log('Aditya Das..');