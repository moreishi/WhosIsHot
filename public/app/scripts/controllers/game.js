'use strict';

angular.module('whotApp')
  .controller('GameCtrl', ['$scope','$timeout','GameSrvc',function ($scope,$timeout,GameSrvc) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.frm = { email: "", message: "" };
      $scope.compare = [];
      $scope.loader = false;
      $scope.messageSuccess = false;
      $scope.sendingMsg = false;
      $scope.sentMsg = false;

      GameSrvc.profiles(function(a) {
        $scope.compare = a;
        console.log($scope.compare);
      });

      $scope.nextCompare = function() {
        $scope.loader = true;
        $scope.compare = [];
        GameSrvc.gen(function(a) {
          $scope.compare = a;
          $scope.loader = false;
        });
      }

      $scope.closeModel = function() {
        $scope.frm = { email: "", message: "" };
        $scope.dismiss();
      }

      $scope.sendMessage = function(a) {
        $scope.sendingMsg = true;
        $timeout(function() {
          $scope.sendingMsg = false;
          $scope.sentMsg = true;
          $scope.messageSuccess = true;
          $timeout(function() {
            $scope.sentMsg = true;
            $scope.messageSuccess = true;
            $scope.dismiss();
            $scope.messageSuccess = false;
            $scope.sentMsg = false;
            $scope.frm = { email: "", message: "" };
          }, 1000);
        }, 1000 * 2);
      }

    }]);