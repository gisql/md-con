/*
 * Copyright (c) 2014 dagimos.  All rights reserved.
 */

'use strict';

/**
 * @ngdoc service
 * @name mdConApp.mdConfig
 * @description
 * # mdConfig
 * Factory in the mdConApp.
 */
angular.module('mdConApp')
    .factory('mdConfig', ['$http', function ($http) {
        function requestConfig() {
            return $http.get('/api/nav.json').then(function (res) {
                return res.data;
            });
        }

        return {
            states: requestConfig()
        };
    }]);
