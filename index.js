/* jshint node: true */
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-chai',

  included: function included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/chai/chai.js', {
      type: 'test'
    });
  },

  treeForVendor: function(/* tree */) {
    var chaiPath = path.dirname(resolve.sync('chai'));
    return new Funnel(chaiPath, {
      files: ['chai.js'],
      destDir: '/chai',
    });
  }
};
