'use strict';

/**
 * @ngdoc service
 * @name lngTesterApp.scores
 * @description
 * # scores
 * Factory in the lngTesterApp.
 */
angular.module('lngTesterApp')
  .factory('scores', function () {

    var scores = {
      'lecture1': {
        'trained': 19,
        'correct': 18,
        'mistakes': [
          {
            'mistakes': 2,
            'questions': 1
          }
        ],
        'unanswered': 0
      },
      'lecture2': {
        'trained': 20,
        'correct': 18,
        'mistakes': [
          {
            'mistakes': 2,
            'questions': 1
          }
        ],
        'unanswered': 1
      }
    };

    // Public API here
    return {
      getScore: function (id) {
        return scores[id];
      }
    };
  });
