(function () {
	'use strict';

	var foodieController = function (Foodie) {
		// find the profile
		var findFoodie = function(request, response) {
			Foodie.findById(request.params.foodieId, function (error, foodie) {
				if (error) {
					response.status(500);
					response.send(error);
				} else {
					response.foodie = foodie;
				}
			})
		};

		return {
			findFoodie: findFoodie
		};
	};

	module.exports = foodieController;
}());