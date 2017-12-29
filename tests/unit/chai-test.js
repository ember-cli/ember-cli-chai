import { module, test } from 'qunit';
import { expect } from 'chai';
import RSVP from 'rsvp';
import sinon from 'sinon';
// import td from 'testdouble';

module('Chai.js');

test('it works', function(assert) {
  expect(true).to.be.true;
  assert.throws(() => expect(true).to.be.false);
});

test('it works with chai-as-promised (resolved promise)', function(assert) {
  assert.expect(0);
  return expect(timeout(10)).to.be.fulfilled;
});

test('it works with chai-as-promised (rejected promise)', function(assert) {
  assert.expect(0);
  return expect(RSVP.reject(new Error('foo'))).to.be.rejected;
});

test('it works with sinon-chai', function(assert) {
  assert.expect(0);
  let spy = sinon.spy();
  spy();
  expect(spy).to.have.been.called;
});

// DISABLED due to conflict with sinon-chai
//
// test('it works with testdouble-chai', function() {
//   let func = td.function();
//   func();
//   expect(func).to.have.been.called;
// });

function timeout(ms) {
  return new RSVP.Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
