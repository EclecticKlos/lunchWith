angular.module('lunchWith', ['ionic', 'lunchWith.controllers', 'lunchWith.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //   .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: 'templates/tabs.html'
  // })

  .state('/', {
    url: '/login',
    views: {
      'app-login': {
        templateUrl: 'templates/linkedin-account-creation.html',
        controller: 'LinkedinCtrl'
      }
    }
  })


  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/apps.html'
  })

  // Each tab has its own nav history stack:

  .state('app.dash', {
    url: '/dash',
    views: {
      'app-dash': {
        templateUrl: 'templates/app-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('app.chats', {
      url: '/chats',
      views: {
        'app-chats': {
          templateUrl: 'templates/app-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('app.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'app-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
  .state('app.account', {
    url: '/account',
    views: {
      'app-account': {
        templateUrl: 'templates/app-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
