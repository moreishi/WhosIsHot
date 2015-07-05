'use strict';

angular.module('whotApp')
  .service('GameSrvc', ['$http', function ($http) {

      var profiles = [];

      return {
        gen: function(cb) {
          $http({
            url: 'http://localhost:3000/api/loveme/generate',
            method: 'GET'
          }).success(function(a) {
            profiles = a;
            cb(a);
          });
        },
        profiles: function(cb) {
          cb(profiles);
        }
      }
    }]);