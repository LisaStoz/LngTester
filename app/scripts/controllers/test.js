'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('TestCtrl', function ($scope, questions) {
    $scope.question = questions.next();
  });
