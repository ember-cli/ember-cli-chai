/* jshint node: true */
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-cli-chai',

  init: function() {
    this._super.init && this._super.init.apply(this, arguments);

    var dependencies = Object.keys(this.project.pkg.dependencies || {});
    var devDependencies = Object.keys(this.project.pkg.devDependencies || {});
    var checker = new VersionChecker(this);

    this.importChaiJQuery =
      (dependencies.indexOf('chai-jquery') !== -1 || devDependencies.indexOf('chai-jquery') !== -1) &&
      checker.for('chai-jquery', 'npm').satisfies('^2.0.0');
  },

  included: function included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/chai/chai.js', { type: 'test' });
    app.import('vendor/shims/chai.js', { type: 'test' });

    if (this.importChaiJQuery) {
      app.import('vendor/chai/chai-jquery.js', { type: 'test' });
    }
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

    if (this.importChaiJQuery) {
      var chaiJQueryPath = path.dirname(resolve.sync('chai-jquery', { basedir: this.project.root }));
      var chaiJQueryTree = new Funnel(chaiJQueryPath, {
        files: ['chai-jquery.js'],
        destDir: '/chai',
      });

      trees.push(chaiJQueryTree);
    }

    return new MergeTrees(trees, {
      annotation: 'ember-cli-chai: treeForVendor'
    });
  }
};
