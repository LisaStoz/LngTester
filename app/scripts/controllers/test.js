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

    $scope.submitAnswer = function(){
      questions.answer($scope.user && ($scope.user.answer === $scope.question.answer));
    };
  });
