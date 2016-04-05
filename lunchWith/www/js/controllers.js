angular.module('lunchWith.controllers', [])


.controller('LinkedinCtrl', ['$scope',"$cordovaOauth", "$ionicModal", "$cordovaKeyboard", "LinkedinAPIRequest", "LunchZipService", function($scope, $cordovaOauth, $ionicModal, $cordovaKeyboard, LinkedinAPIRequest, LunchZipService) {

  $scope.lunchZip = { LunchZip: "Zip Code"};

    // Zipcode Modal
  $ionicModal.fromTemplateUrl('templates/lunch-zip.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.buttonName = "Create account with LinkedIn";

  $scope.linkedinLogin = function(clientId,
    clientSecret) {

    var APPKEY = '75iwyhxrlrm0mc';
    var SECRET = 'bv1mBnOpO7yOcJtt';

    $cordovaOauth.linkedin(APPKEY, SECRET, ["r_emailaddress"], "randomstring")
    .then(function(response) {
      console.log(response);
      LinkedinAPIRequest.getUserDataFromLinkedin(response.access_token);
      // $scope.modal.show();
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.openLunchZip = function () {
    $scope.modal.show();
  };

  $scope.closeLunchZip = function () {
    // post model to api
    // $scope.lunchZip
    console.log($scope.lunchZip.LunchZip);
    LunchZipService.setLunchZip($scope.lunchZip.LunchZip)
    $scope.modal.hide();
    $scope.modal.remove();
  };

}])

.controller('FoodiesCtrl',['$scope', 'LunchZipService', function($scope, LunchZipService) {
  var foodieDB = [
    {
      "linkedinId": "jHi2RNpp23",
      "firstName": "Thuong",
      "lastName": "Ho",
      "headline": "Web Apps Developer",
      "url": "https://www.linkedin.com/profile/view?id=AAoAAAOxcOwBxJIttVPHY0yu11x4dFFM6-_mzMc&authType=name&authToken=YfxC&trk=api*a3227641*s3301901*",
      "numConnections": 314,
      "pictureUrl": "https://media.licdn.com/mpr/mprx/0_GoniwO0q-HTVQ1mQGd5ywgU6-INqE1mQ8DCywgyqDa8XvBM6m2QfLjHVp5qIdq7EidNjkVm14yj_",
      "bio": "I like to eat eat eat apples and bananas I like to eat eat eat apples and bananasI like to eat eat eat apples and bananasI like to eat eat eat apples and bananas",
      "lunchZip": "94107"
    },
   {
      "linkedinId": "jHi2RNppDF",
      "firstName": "Notmy",
      "lastName": "LunchZip",
      "headline": "Web Apps Developer",
      "url": "https://www.linkedin.com/profile/view?id=AAoAAAOxcOwBxJIttVPHY0yu11x4dFFM6-_mzMc&authType=name&authToken=YfxC&trk=api*a3227641*s3301901*",
      "numConnections": 14,
      "pictureUrl": "https://media.licdn.com/mpr/mprx/0_GoniwO0q-HTVQ1mQGd5ywgU6-INqE1mQ8DCywgyqDa8XvBM6m2QfLjHVp5qIdq7EidNjkVm14yj_",
      "bio": "I like to eat eat eat apples and bananas I like to eat eat eat apples and bananasI like to eat eat eat apples and bananasI like to eat eat eat apples and bananas",
      "lunchZip": "94103"
    },
    {
      "linkedinId": "jHi2RNppLe",
      "firstName": "Hewlett",
      "lastName": "Packard",
      "headline": "Web Apps Developer",
      "url": "https://www.linkedin.com/profile/view?id=AAoAAAOxcOwBxJIttVPHY0yu11x4dFFM6-_mzMc&authType=name&authToken=YfxC&trk=api*a3227641*s3301901*",
      "numConnections": 31,
      "pictureUrl": "https://media.licdn.com/mpr/mprx/0_GoniwO0q-HTVQ1mQGd5ywgU6-INqE1mQ8DCywgyqDa8XvBM6m2QfLjHVp5qIdq7EidNjkVm14yj_",
      "bio": "I like to eat eat eat apples and bananas I like to eat eat eat apples and bananasI like to eat eat eat apples and bananasI like to eat eat eat apples and bananas",
      "lunchZip": "94107"
    }
  ];

  $scope.indexCounter = 0;
  $scope.foodiesWithSameLunchZipList = [];
  $scope.currentFoodie = foodieDB[$scope.indexCounter];

  $scope.addFoodieToFoodiesWithSameLunchZipList = function() {
    while ($scope.indexCounter < foodieDB.length && LunchZipService.getLunchZip() !== $scope.currentFoodie.lunchZip) {  // Advance to next foodie with matching lunchZip
      $scope.indexCounter++;
      $scope.currentFoodie = foodieDB[$scope.indexCounter];
    }
    $scope.foodiesWithSameLunchZipList.push($scope.currentFoodie)
    $scope.indexCounter++;
    $scope.currentFoodie = foodieDB[$scope.indexCounter];
  };

  $scope.makeInitialSameLunchZipList = function(initialListSize){
    var foodiesAddedSoFar = 0;
    while ($scope.indexCounter < foodieDB.length && foodiesAddedSoFar <= initialListSize) {  // Advance to next foodie with matching lunchZip
      $scope.addFoodieToFoodiesWithSameLunchZipList();
      foodiesAddedSoFar++;
    }
  }

  $scope.makeInitialSameLunchZipList(10);

  $scope.remove = function (){
    $scope.foodiesWithSameLunchZipList.splice($scope.foodiesWithSameLunchZipList.length -1, 1);
  }

}])

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// })
;
