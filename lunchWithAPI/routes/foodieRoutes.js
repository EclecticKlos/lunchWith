(function () {
    'use strict';

    var express = require('express');

    var routes = function (Foodie) {
        var foodieRouter = express.Router();
        var foodieController = require('../controllers/foodieController')(Foodie);

        foodieRouter.route('/')
            .post(foodieController.post)
            .get(foodieController.get);

        return foodieRouter;
    };

    module.exports = routes;
}());