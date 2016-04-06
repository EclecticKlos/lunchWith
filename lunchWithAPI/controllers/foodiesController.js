(function () {
    'use strict';

    var foodiesController = function (Foodie) {

        var post = function (req, res) {
            var foodie = new Foodie(req.body);

            foodie.save();
            // 201 Created
            res.status(201);
            res.send(foodie);
        };

        var get = function (req, res) {
            var query = {};

            // if (req.query.lunchZip) {
            //   query.lunchZip = req.query.lunchZip;
            // }

            Foodie.find(query, function (err, foodies) {
                if (err) {
                    res.status(500);
                    res.send(err);
                } else {
                    res.json(foodies);
                }
            });
        };

        return {
            post: post,
            get: get
        }

    };

    module.exports = foodiesController;
}());