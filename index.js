/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chai',
  included: function (app) {
    this._super.included(app);

    app.import('vendor/ember-cli-chai/ember-cli-chai.js');
  }
};
