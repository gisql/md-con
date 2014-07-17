
'use strict';

describe('Service: mdConfig', function () {

    // load the service's module
    beforeEach(module('mdConApp'));

    // instantiate service
    var mdConfig;
    beforeEach(inject(function (_mdConfig_) {
        mdConfig = _mdConfig_;
    }));

    it('should do something', function () {
        expect(!!mdConfig).toBe(true);
    });

});
