const msleep = require('../src/index');

describe('msleep', () => {

    it('should return a resolve promise',  () => {
        expect(msleep(1000)).resolves.toBe(undefined);
    });

});
