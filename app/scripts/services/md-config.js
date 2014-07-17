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
    .factory('mdConfig', ['$http', '$log', function ($http, $log) {
        $log.info('creating config factory');

        function requestConfig() {
            $log.info('requesting config');
            return $http.get('/api/nav.json').then(function (res) {
                $log.info('resolving config: %o', res.data);
                return res.data;
            });
        }

        return {
            states: requestConfig
        };
    }]);
