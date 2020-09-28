const express = require('express');
const app = express();
const mongoose = require('./db')
const bodyParser = require('body-parser');
const routes = require('./routes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/api', routes);

app.listen('5000', console.log('Listening on port : 5000'));

module.exports = app;