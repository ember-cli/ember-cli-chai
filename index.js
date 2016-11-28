/* jshint node: true */
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var VersionChecker = require('ember-cli-version-checker');

var jqueryPlugin = {
  name: 'chai-jquery',
  constraint: '^2.0.0',
  path: 'chai-jquery.js',
};

var domPlugin = {
  name: 'chai-dom',
  constraint: '^1.0.0',
  path: 'chai-dom.js',
};

var supportedPlugins = [jqueryPlugin, domPlugin];

module.exports = {
  name: 'ember-cli-chai',

  init: function() {
    this._super.init && this._super.init.apply(this, arguments);

    var dependencies = Object.keys(this.project.pkg.dependencies || {});
    var devDependencies = Object.keys(this.project.pkg.devDependencies || {});
    var checker = new VersionChecker(this);

    this.plugins = supportedPlugins.filter(function(plugin) {
      return (dependencies.indexOf(plugin.name) !== -1 || devDependencies.indexOf(plugin.name) !== -1) &&
        checker.for(plugin.name, 'npm').satisfies(plugin.constraint);
    });

    // filter out `chai-dom` if `chai-jquery` is also installed as
    // having both plugins active results in conflicts
    let domPluginIndex = this.plugins.indexOf(domPlugin);
    let jqueryPluginIndex = this.plugins.indexOf(jqueryPlugin);
    if (jqueryPluginIndex !== -1 && domPluginIndex !== -1) {
      this.plugins.splice(domPluginIndex, 1);
    }
  },

  included: function included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/chai/chai.js', { type: 'test' });
    app.import('vendor/shims/chai.js', { type: 'test' });

    this.plugins.forEach(function(plugin) {
      app.import('vendor/chai/' + plugin.path, { type: 'test' });
    });
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

    let basedir = this.project.root;
    this.plugins.forEach(function(plugin) {
      var pluginPath = path.dirname(resolve.sync(plugin.name, { basedir: basedir }));
      var pluginTree = new Funnel(pluginPath, {
        files: [plugin.path],
        destDir: '/chai',
      });

      trees.push(pluginTree);
    });

    return new MergeTrees(trees, {
      annotation: 'ember-cli-chai: treeForVendor'
    });
  }
};
