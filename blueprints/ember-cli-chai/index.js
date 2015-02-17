module.exports = {
  description: 'ember-cli-chai',
  normalizeEntityName: function () {},
  afterInstall: function(options) {
    return this.addPackageToProject('chai', '~2.0.0');
  }
};
