/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-chai',
  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/chai/chai.js');
    app.import('vendor/ember-cli-chai/ember-cli-chai.js');

  }
};
