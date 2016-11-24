/* global self, define */

(function() {
  function vendorModule() {
    'use strict';

    return {
      default: self.chai,

      assert: self.chai.assert,
      expect: self.chai.expect,
      should: self.chai.should,

      config: self.chai.config,
      use: self.chai.use,

      Assertion: self.chai.Assertion,
      AssertionError: self.chai.AssertionError,
    };
  }

  define('chai', [], vendorModule);
})();
