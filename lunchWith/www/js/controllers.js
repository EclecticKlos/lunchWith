angular.module('lunchWith.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LinkedinCtrl', function($scope, $cordovaOauth, $ionicModal, $cordovaKeyboard, LinkedinAPIRequest) {

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
    console.log($scope.lunchZip);
    $scope.modal.hide();
    $scope.modal.remove();
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
