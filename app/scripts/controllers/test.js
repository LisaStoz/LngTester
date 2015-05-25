'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('TestCtrl', function ($scope, $timeout, questions) {

    var correct;

    $scope.user = {
      answer: ''
    };

    $scope.question = questions.next();

    $scope.submitAnswer = function(){
      $scope.user.answer = $scope.user.answer || '(no answer)';
      correct = $scope.user.answer === $scope.question.answer;
      questions.answer(correct);

      if (correct) {
        $timeout($scope.nextQuestion, 600);
      }

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
      if ($scope.user) {
        $scope.user.answer = '';
      }
      $scope.question = questions.next();
    };

  });
