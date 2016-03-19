// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.calendar'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('MyController', function ($scope) {
        /* alert on eventClick */
        $scope.alertOnEventClick = function (date, jsEvent, view) {
            console.log("Hiiiiiiii",date);
        };
        $scope.eventSources = [
            // your event source
            {
                events: [ // put the array in the `events` property
                    {
                        title: '1',
                        start: '2016-03-03'
                    },
                    {
                        title: '2',
                        start: '2016-03-05',
                        end: '2016-03-07'
                    },
                    {
                        title: '3',
                        start: '2016-04-09'
                    },
                    {
                        title: 'vhvdhvh',
                        start: '2016-04-19'
                    }
                ],
                color: 'black',     // an option!
                textColor: 'yellow' // an option!
            }
            // any other event sources...
        ];
        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                },
                eventClick: $scope.alertOnEventClick,
            }
        };
    });
