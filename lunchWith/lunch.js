angular.module('lunchWith.lunch', [])

.factory('LunchService', function() {
  // var client_id = 75iwyhxrlrm0mc;
  var clientSecret = "bv1mBnOpO7yOcJtt";


  return {
    clientSecret: clientSecret
  }
})


