'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('MainCtrl', function ($scope) {

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
  });
