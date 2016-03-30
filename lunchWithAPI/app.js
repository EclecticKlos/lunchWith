(function () {
    'use strict';

    var express = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser');

    var db = mongoose.connect('mongodb://localhost/lunchWithAPI');

    var Foodie = require('./models/foodieModel');
    var app = express();

    var port = process.env.PORT || 3000;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var foodieRouter = require('./routes/foodieRoutes')(Foodie);

    app.use('/api/foodies', foodieRouter);
    // app.use('/api/companies', companyRouter);

    app.get('/', function (req, res) {
        res.send('Welcome to LunchWith API');
    });

    app.listen(port, function () {
        console.log('Running on port: ' + port);
    });

    module.exports = app;
}());