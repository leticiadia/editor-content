const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.listen(5500, () => {
    console.log('app is running');
});




