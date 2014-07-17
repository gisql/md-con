
'use strict';

describe('Directive: mdHeader', function () {

    // load the directive's module
    beforeEach(module('mdConApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<md-header></md-header>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('this is the mdHeader directive');
    }));
});
