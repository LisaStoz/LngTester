'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, dictionaries, scores) {

    var dictionaryId = $routeParams.dictionaryId;

    $scope.dictionary = dictionaries.getDictionary(dictionaryId);

    $scope.score = scores.loadScore(dictionaryId);
    $scope.score = scores.getScore();

  });
