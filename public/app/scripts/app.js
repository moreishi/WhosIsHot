'use strict';

/**
 * @ngdoc overview
 * @name whotApp
 * @description
 * # whotApp
 *
 * Main module of the application.
 */
angular
  .module('whotApp', [
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
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        resolve: {
          profiles: function($q,GameSrvc) {
            var defer = $q.defer();
            GameSrvc.gen(function(a) {
              defer.resolve(a);
            });
            return defer.promise;
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
