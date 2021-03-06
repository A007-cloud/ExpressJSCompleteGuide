const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// console.log(routes.someText);

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRouters);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

console.log('Aditya Das..');