import { test } from 'qunit';
import { withChai } from 'ember-cli-chai/qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', withChai(function(expect) {
  visit('/');

  andThen(function() {
    expect(currentURL()).to.equal('/');
  });
}));
