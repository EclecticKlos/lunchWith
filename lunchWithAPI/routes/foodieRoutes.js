(function () {
    'use strict';

    var express = require('express');

    var routes = function (Foodie) {
        var foodieRouter = express.Router();
        var foodiesController = require('../controllers/foodiesController')(Foodie);
        var foodieController = require('../controllers/foodieController')(Foodie);

        foodieRouter.route('/')
            .post(foodiesController.post)
            .get(foodiesController.get);

        foodieRouter.use('/:foodieId', foodieController.findFoodie);

        foodieRouter.route('/:foodieId')
            .get(foodieController.get);

        return foodieRouter;
    };

    module.exports = routes;
}());