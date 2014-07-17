/*
 * Copyright (c) 2014 dagimos.  All rights reserved.
 */

'use strict';

/**
 * @ngdoc function
 * @name mdConApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdConApp
 */
angular.module('mdConApp')
    .controller('MainCtrl', function ($scope, $log) {
        $log.info('info: inside MainCtrl');
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
