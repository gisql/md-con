
'use strict';

/**
 * @ngdoc service
 * @name mdConApp.mdConfig
 * @description
 * # mdConfig
 * Factory in the mdConApp.
 */
angular.module('mdConApp')
    .factory('mdConfig', ['$http', function ($http, $log) {
        function requestConfig() {
            $log.info('requesting data');
            return $http.get('/api/nav.json').then(function (res) {
                $log.info('resolving data');
                return res.data;
            });
        }

        return {
            states: requestConfig()
        };
    }]);
