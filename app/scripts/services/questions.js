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
      questions = questions.concat(questions.slice(r, r+1));
      length = questions.length;
    };

    var remove = function(){
      questions.splice(r, 1);
      length = questions.length;
    };

    var generateQuestion = function(){
      r = Math.floor(Math.random() * length);
    };

    // Public API here
    return {
      questionsLeft: function(){
        return length > 0;
      },
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
