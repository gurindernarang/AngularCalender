
var blank = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

blank.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
blank.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            cache: false,
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "loginCtrl"
        })

    $urlRouterProvider.otherwise('/login');

});