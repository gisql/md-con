/*
 * Copyright (c) 2014 dagimos.  All rights reserved.
 */

'use strict';

/**
 * @ngdoc directive
 * @name mdConApp.directive:mdHeader
 * @description
 * # mdHeader
 */
angular.module('mdConApp')
    .controller('MenuCtrl', ['$scope', '$location', 'mdConfig', '$log', function ($scope, $location, mdc, $log) {
        /*
        mdc.current().success(function (data) {
            $scope.cfg = data;
        });
         */

//        $scope.cfg = { tag: 'foo' };
        $scope.cfg = mdc.current();
        $log.info('currenct cft at this point: %o', $scope.cfg);
        this.menuClicked = function (i) {
            $scope.menu.forEach(function (mi, n) {
                if (n === i) {
                    $scope.title = $scope.cfg.tag + '>' + mi.name;
                }
                mi.active = n === i;
            });
        };

        $scope.menu = [
            {tag: '/', name: 'Home'},
            {tag: '/speakers', name: 'Speakers'},
            {tag: '/talks', name: 'Talks'},
            {tag: '/program', name: 'Program'},
            {tag: '/contact', name: 'Contact'}
        ];
        $scope.menu.forEach(function (mi) {
            mi.active = $location.url() === mi.tag;
            if (mi.active) {
                $scope.title = $scope.cfg.tag + '/' + mi.name;
            }
        });
    }])
    .directive('mdTitle', function () {
        return {
            template: '{{title}}',
            restrict: 'A',
            controller: 'MenuCtrl'
        };
    })
    .directive('mdHeader', function () {
        return {
            templateUrl: 'views/md-header.html',
            restrict: 'E',
            controller: 'MenuCtrl',
            controllerAs: 'mdh'
        };
    })
;
