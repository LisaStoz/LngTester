'use strict';

/**
 * @ngdoc service
 * @name lngTesterApp.questions
 * @description
 * # questions
 * Factory in the lngTesterApp.
 */
angular.module('lngTesterApp')
  .factory('questions', function () {

    var questions = [
        {
          'question': 'Labas',
          'answer': 'Hello'
        },
        {
          'question': 'Viso gero',
          'answer': 'Goodbye'
        }
    ];

    var length = questions.length;
    var r;

    var add = function(){

    };

    var remove = function(){

    };



    var generateQuestion = function(){
      r = Math.floor(Math.random() * length);
    };

    // Public API here
    return {
      next: function() {
        generateQuestion();
        return questions[r];
      },
      answer: function (correctly) {
        if (correctly) {
          remove();
        } else {
          add();
        }
      }
    };
  });
