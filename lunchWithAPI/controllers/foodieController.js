(function () {
	'use strict';

	var foodieController = function (Foodie) {
		// find the profile
		var findFoodie = function(request, response, next) {
			Foodie.findById(request.params.foodieId, function (error, foodie) {
				if (error) {
					response.status(500);
					response.send(error);
				} else if (foodie) {
					request.foodie = foodie;
					next();
				} else {
					response.status(404);
					response.send('No profile found');
				}
			});
		};

		var get = function (request, response) {
			response.json(request.foodie);
		};

		return {
			findFoodie: findFoodie,
			get: get
		};
	};

	module.exports = foodieController;
}());