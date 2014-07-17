/*
 * Copyright (c) 2014 dagimos.  All rights reserved.
 */

'use strict';

/**
 * @ngdoc function
 * @name mdConApp.controller:ProgramCtrl
 * @description
 * # ProgramCtrl
 * Controller of the mdConApp
 */
angular.module('mdConApp')
    .controller('ProgramCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
