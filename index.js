/* jshint node: true */
'use strict';

var path = require('path');
var resolve = require('resolve');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var VersionChecker = require('ember-cli-version-checker');
var Rollup = require('broccoli-rollup');
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');

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

var asPromisedPlugin = {
  name: 'chai-as-promised',
  constraint: '<6',
  path: 'chai-as-promised.js',
};

var asPromisedPlugin6 = {
  name: 'chai-as-promised',
  constraint: '>=6',
  path: 'chai-as-promised.js',
  rollup: {
    entry: 'chai-as-promised.js',
    dest: 'chai/chai-as-promised.js',
    format: 'iife',
    plugins: [
      nodeResolve(),
      commonjs(),
    ],
  },
};

var sinonPlugin = {
  name: 'sinon-chai',
  constraint: '^2.0.0',
  path: 'sinon-chai.js',
};

var testdoublePlugin = {
  name: 'testdouble-chai',
  constraint: '^0.5.0',
  path: 'testdouble-chai.js',
  supportFile: 'testdouble-chai.js'
};

var supportedPlugins = [
  jqueryPlugin,
  domPlugin,
  asPromisedPlugin,
  asPromisedPlugin6,
  sinonPlugin,
  testdoublePlugin
];

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
    var domPluginIndex = this.plugins.indexOf(domPlugin);
    var jqueryPluginIndex = this.plugins.indexOf(jqueryPlugin);
    if (jqueryPluginIndex !== -1 && domPluginIndex !== -1) {
      this.plugins.splice(domPluginIndex, 1);
    }

    // ensure that `sinon-chai` and `testdouble-chai` aren't both enabled,
    // since they use the same API
    var sinonIndex = this.plugins.indexOf(sinonPlugin);
    var tdIndex = this.plugins.indexOf(testdoublePlugin);
    if (sinonIndex !== -1 && tdIndex !== -1) {
      this.plugins.splice(tdIndex, 1);
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

      if (plugin.supportFile) {
        app.import('vendor/chai-plugin-support/' + plugin.supportFile, { type: 'test' });
      }
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

    var basedir = this.project.root;
    this.plugins.forEach(function(plugin) {
      var pluginTree;

      if (plugin.rollup) {
        pluginTree = new Rollup(__dirname + '/rollup', { rollup: plugin.rollup });

      } else {
        var pluginPath = path.dirname(resolve.sync(plugin.name, { basedir: basedir }));
        pluginTree = new Funnel(pluginPath, {
          files: [plugin.path],
          destDir: '/chai',
        });
      }

      trees.push(pluginTree);
    });

    return new MergeTrees(trees, {
      annotation: 'ember-cli-chai: treeForVendor'
    });
  }
};
