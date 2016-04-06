(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var foodieModel = new Schema({
        linkedinId: {type: String, default: null},
        firstName: {type: String, default: null},
        lastName: {type: String, default: null},
        email: {type: String, default: null},
        headline: {type: String, default: null},
        url: {type: String, default: null},
        device: {type: String, default: null},
        expiration: {type: Date, default: null},
        bookmarks: [String],
        numConnections: {type: Number, default: null},
        lunchZip: {type: String, default: null},
        lunchRange: {type: Number, default: null},
        blocked: [String],
        bio: {type: String, default: null},
        favFood: [String]
    });

    module.exports = mongoose.model('Foodie', foodieModel);
}());