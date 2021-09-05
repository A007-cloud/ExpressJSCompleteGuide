const express = require('express');

// console.log(routes.someText);

const app = express();

 app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
 });

 app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello form Express!</h1>');
 })

app.listen(3000);

console.log('Aditya Das..');