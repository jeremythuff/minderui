'use strict';

describe('Minder.version module', function() {
  beforeEach(module('Minder.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
