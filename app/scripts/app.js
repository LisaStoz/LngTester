'use strict';

/**
 * @ngdoc overview
 * @name lngTesterApp
 * @description
 * # lngTesterApp
 *
 * Main module of the application.
 */
angular
  .module('lngTesterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl'
      })
      .when('/correct', {
        templateUrl: 'views/correct.html'
      })
      .when('/wrong', {
        templateUrl: 'views/wrong.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
