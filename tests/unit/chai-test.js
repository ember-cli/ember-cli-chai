import { module, test } from 'qunit';
import { expect } from 'chai';

module('Chai.js');

test('it works', function(assert) {
  expect(true).to.be.true;
  assert.throws(() => expect(true).to.be.false);
});

