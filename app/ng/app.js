'use strict';

// Declare app level module which depends on views, and components
var rc = {};
rc.App = angular.module('RobotChickenApp', [
  'ngRoute',
])

rc.App.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);