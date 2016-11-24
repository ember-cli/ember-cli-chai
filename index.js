/* jshint node: true */
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-chai',

  included: function included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/chai/chai.js', { type: 'test' });
    app.import('vendor/shims/chai.js', { type: 'test' });
  },

  treeForAddon: function() {
    if (this.app.tests) {
      return this._super.treeForAddon.apply(this, arguments);
    }
  },

  treeForVendor: function(tree) {
    var chaiPath = path.dirname(resolve.sync('chai'));
    var chaiTree = new Funnel(chaiPath, {
      files: ['chai.js'],
      destDir: '/chai',
    });

    var trees = [tree, chaiTree];

    return new MergeTrees(trees, {
      annotation: 'ember-cli-chai: treeForVendor'
    });
  }
};
