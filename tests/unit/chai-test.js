import { module, test } from 'qunit';
import { expect } from 'chai';
import { withChai } from 'ember-cli-chai/qunit';
import RSVP from 'rsvp';
import sinon from 'sinon';
// import td from 'testdouble';

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

test('it works with sinon-chai', withChai(function(expect) {
  let spy = sinon.spy();
  spy();
  expect(spy).to.have.been.called;
}));

// DISABLED due to conflict with sinon-chai
//
// test('it works with testdouble-chai', withChai(function(expect) {
//   let func = td.function();
//   func();
//   expect(func).to.have.been.called;
// }));

function timeout(ms) {
  return new RSVP.Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
