(function() {
  /* globals define, braintree */
  var shims = {
    timecop: {
      default: Timecop,
    },
  };

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  for (var moduleName in shims) {
    generateModule(moduleName, shims[moduleName]);
  }
})();
