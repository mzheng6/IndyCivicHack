'use strict';

/**
 * @ngdoc overview
 * @name hackforindyApp
 * @description
 * # hackforindyApp
 *
 * Main module of the application.
 */
angular
  .module('hackforindyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainC'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
