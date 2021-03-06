const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('./db/mongoose.js')

const app = express();

const secret = 'mysecretsshhh';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', require('./routes/home.js'));
app.use('/', require('./routes/login.js'));
app.use('/', require('./routes/test.js'));

module.exports = app;
