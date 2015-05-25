'use strict';

/**
 * @ngdoc service
 * @name lngTesterApp.dictionaries
 * @description
 * # dictionaries
 * Factory in the lngTesterApp.
 */
angular.module('lngTesterApp')
  .factory('dictionaries', function () {

    var dictionaries = [
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

    // Public API here
    return {
      getDictionaries: function () {
        return dictionaries;
      },
      getDictionary: function(id) {
        var result = {};
        dictionaries.forEach(function(dictionary){
          if (dictionary.id === id) {
            result = dictionary;
          }
        });
        return result;
      }
    };
  });
