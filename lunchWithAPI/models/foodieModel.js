(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var foodieModel = new Schema({
        linkedinId: {type: String},
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        headline: {type: String},
        url: {type: String},
        device: {type: String},
        expiration: {type: Date},
        bookmarks: [String],
        numConnections: {type: Number},
        lunchZip: {type: String},
        lunchRange: {type: Number},
        blocked: [String],
        bio: {type: String},
        favFood: [String]
    });

    module.exports = mongoose.model('Foodie', foodieModel);
}());