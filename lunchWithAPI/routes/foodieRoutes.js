(function () {
    'use strict';

    var express = require('express');

    var routes = function (Foodie) {
        var foodieRouter = express.Router();
        var foodiesController = require('../controllers/foodiesController')(Foodie);

        foodieRouter.route('/')
            .post(foodiesController.post)
            .get(foodiesController.get);

        return foodieRouter;
    };

    module.exports = routes;
}());