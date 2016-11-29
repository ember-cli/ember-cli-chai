import { module, test } from 'qunit';
import { expect } from 'chai';
import { withChai } from 'ember-cli-chai/qunit';
import RSVP from 'rsvp';

module('Chai.js');

test('it works', function(assert) {
  expect(true).to.be.true;
  assert.throws(() => expect(true).to.be.false);
});

test('it has QUnit integration', withChai(function(expect) {
  expect(true).to.be.true;
  expect(5, '5 < 10').to.be.below(10);
}));

test('it works with chai-as-promised (resolved promise)', withChai(function(expect) {
  return expect(timeout(10)).to.be.fulfilled;
}));

test('it works with chai-as-promised (rejected promise)', withChai(function(expect) {
  return expect(RSVP.reject(new Error('foo'))).to.be.rejected;
}));

function timeout(ms) {
  return new RSVP.Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
