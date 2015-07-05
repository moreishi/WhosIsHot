'use strict';

/**
 * @ngdoc function
 * @name whotApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whotApp
 */
angular.module('whotApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
