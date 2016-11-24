/* global chai */

import { module, test } from 'qunit';

let { expect } = chai;

module('Chai.js');

test('it works', function(assert) {
  expect(true).to.be.true;
  assert.throws(() => expect(true).to.be.false);
});

