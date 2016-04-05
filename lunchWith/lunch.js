angular.module('lunchWith.lunch', [])

.factory('LunchService', function() {

  var clientSecret = '';

  return {
    clientSecret: clientSecret
  }
})

// Chronofy Google
// XaLwX-M-SXBHtbk2vEfkUZYjGD3RF6Ca
//
// // Chronofy iCloud
// xTjut85j56I1ooN-U271vA7_MFemTWfC
//
// // Chronofy More official iCloud token?
// PR3Ey6z_zf97BYMiNcDKd7IDiQlu9-qJ
//
// // Chronofy Yet another token for @gmail?
// nhBIbTqlDSOW563eTnS7Cg8z68xGznNj


// curl -v -G --header "Authorization: Bearer nhBIbTqlDSOW563eTnS7Cg8z68xGznNj" \
//   -d 'tzid=America/Los_Angeles&from=2016-04-04&to=2016-04-09' https://api.cronofy.com/v1/events
