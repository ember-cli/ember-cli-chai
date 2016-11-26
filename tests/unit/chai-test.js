import { module, test } from 'qunit';
import { expect } from 'chai';
import { withChai } from 'ember-cli-chai/qunit';

module('Chai.js');

test('it works', function(assert) {
  expect(true).to.be.true;
  assert.throws(() => expect(true).to.be.false);
});

test('it has QUnit integration', withChai(function(expect) {
  expect(true).to.be.true;
  expect(5, '5 < 10').to.be.below(10);
}));
