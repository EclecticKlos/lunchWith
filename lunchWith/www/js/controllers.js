angular.module('lunchWith.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LinkedinCtrl', function($scope, $cordovaOauth) {

  $scope.buttonName = "Create account with LinkedIn";

  $scope.linkedinLogin = function(clientId,
    clientSecret) {

    // var state = "asdf";
    var APPKEY = '';
    var SECRET = '';
    $cordovaOauth.linkedin(APPKEY, SECRET, ["r_emailaddress"], "randomstring")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

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
