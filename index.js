/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chai',
  included: function (app) {
    app.import('vendor/ember-cli-chai/ember-cli-chai.js');
  }
};
