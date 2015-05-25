'use strict';

/**
 * @ngdoc function
 * @name lngTesterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lngTesterApp
 */
angular.module('lngTesterApp')
  .controller('MainCtrl', function ($scope, dictionaries) {
    $scope.dictionaries = dictionaries.getDictionaries();
  });
