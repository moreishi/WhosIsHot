'use strict';

angular.module('whotApp')
  .directive('myModal', function() {
     return {
       restrict: 'A',
       link: function(scope, element, attr) {
         
         scope.dismiss = function() {
             element.modal('hide');
         };

       }
     } 
  });