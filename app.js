const express = require('express');
const bodyParser = require('body-parser');

// console.log(routes.someText);

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
 });

 app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
 });

 app.use('/', (req, res, next) => {
    res.send('<h1>Hello form Express!</h1>');
 });



app.listen(3000);

console.log('Aditya Das..');