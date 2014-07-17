
'use strict';

/**
 * @ngdoc directive
 * @name mdConApp.directive:mdFooter
 * @description
 * # mdFooter
 */
angular.module('mdConApp')
    .directive('mdFooter', function () {
        return {
            templateUrl: 'views/md-footer.html',
            restrict: 'E',
            controller: function () {
            },
            controllerAs: 'mdf'
        };
    });
