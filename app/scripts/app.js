/*
 * Copyright (c) 2014 dagimos.  All rights reserved.
 */

'use strict';

/**
 * @ngdoc overview
 * @name mdConApp
 * @description
 * # mdConApp
 *
 * Main module of the application.
 */
angular
    .module('mdConApp', [
        'ui.router',
        'ngAnimate'/*,
         'ngResource',
         'ngRoute',
         'ngSanitize',
         'ngTouch'*/
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('mdConApp', {
                templateUrl: 'layout.html',
                controller: 'AppController',
                resolve: {
                    nav: ['mdConfig', '$log',
                        function (mdConfig) {
                            $log.info('inside AppController resolver');
                            return mdConfig.states();
                        }
                    ]
                }
            })
            .state('mdConApp.home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('mdConApp.program', {
                url: '/program',
                templateUrl: 'views/program.html',
                controller: 'ProgramCtrl'
            })
            .state('mdConApp.speakers', {
                url: '/speakers',
                templateUrl: 'views/speakers.html',
                controller: 'SpeakersCtrl'
            })
            .state('mdConApp.talks', {
                url: '/talks',
                templateUrl: 'views/talks.html',
                controller: 'TalksCtrl'
            });
    })
    .controller('AppController', function ($scope, $log, nav) {
        $log.info('inside AppController: %o', nav);
        $scope.navs = nav;
    })
    .run(function ($state, $log) {
        $log.info('inside run');
        $state.go('mdConApp.home');
        $log.info('after calling go');
    });
