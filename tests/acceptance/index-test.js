import { describe, it } from 'mocha';
import { setupAcceptanceTest } from 'ember-mocha';
import { expect } from 'chai';

import Application from '../../app';

describe('Acceptance | index', function() {
  setupAcceptanceTest({ Application });

  it('visiting /', function() {
    visit('/');

    andThen(function() {
      expect(currentURL()).to.equal('/');
      expect(find('.test-element')).to.have.text('hello');
    });
  });
});
