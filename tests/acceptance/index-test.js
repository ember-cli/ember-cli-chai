import { test } from 'qunit';
import { expect } from 'chai';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  assert.expect(0);

  visit('/');

  andThen(function() {
    expect(currentURL()).to.equal('/');
    expect(find('.test-element')).to.have.text('hello');
  });
});
