'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('DetailsCtrl', function ($scope, $routeParams) {

    var dictionaryId = $routeParams.dictionaryId;

    // FIXME - the dictionary to be extracted from google drive
    // FIXME - the dictionaries to be extracted from google drive
    $scope.dictionaries = [
      {
        'id': 'lecture1',
        'name': 'Lecture 1',
        'questions': 20
      },
      {
        'id': 'lecture2',
        'name': 'Lecture 2',
        'questions': 20
      }
    ];

    $scope.dictionary = {};
    $scope.dictionaries.forEach(function(dictionary){
      if (dictionary.id === dictionaryId) {
        $scope.dictionary = dictionary;
      }
    });

    // FIXME - the scope to be extracted from db
    $scope.scores = {
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

    $scope.score = $scope.scores[dictionaryId];

  });
