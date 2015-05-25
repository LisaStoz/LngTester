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
        'correct': 18,
        'mistakes': 2
      },
      'lecture2': {
        'correct': 18,
        'mistakes': 2
      }
    };

    var score, newScore;

    // Public API here
    return {
      loadScore: function(id){
        score = scores[id];
      },
      getScore: function () {
        return score;
      },
      createScore: function(id){
        newScore = {};
        newScore[id] = {
          correct: 0,
          mistakes: 0
        };
      }

    };
  });
