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

    var correct;

    $scope.question = questions.next();

    $scope.submitAnswer = function(){
      correct = $scope.user !== undefined && $scope.user.answer === $scope.question.answer;
      questions.answer(correct);
    };

    $scope.isCorrect = function(){
      return correct === true;
    };

    $scope.isIncorrect = function(){
      return correct === false;
    };

    $scope.notSubmitted = function() {
      return !$scope.isCorrect() && !$scope.isIncorrect();
    };

    $scope.nextQuestion = function(){
      correct = undefined;
      $scope.question = questions.next();
    };

  });
