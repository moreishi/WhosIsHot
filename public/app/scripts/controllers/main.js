'use strict';

/**
 * @ngdoc function
 * @name whotApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whotApp
 */
angular.module('whotApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });