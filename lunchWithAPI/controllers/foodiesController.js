(function () {
    'use strict';

    var foodiesController = function (Foodie) {

        var post = function (req, res) {
            var foodie = new Foodie(req.body);

            console.log('POST foodie', foodie);
        };

        var get = function (req, res) {
            var query = {};

            // if (req.query.lunchZip) {
            //   query.lunchZip = req.query.lunchZip;
            // }

            Foodie.find(query, function (err, foodies) {
                if (err) {
                    res.status(500).send(err);
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