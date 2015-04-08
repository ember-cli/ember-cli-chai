module.exports = {
  description: 'ember-cli-chai',
  normalizeEntityName: function () {},
  afterInstall: function(options) {
    var that = this;
    return this.addBowerPackageToProject('chai', '~2.2.0').then(function () {
      return that.addPackageToProject('chai', '~2.2.0');
    });
  }
};
