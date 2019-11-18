import { describe, it } from 'mocha';
import { setupApplicationTest } from 'ember-mocha';
import { visit, currentURL, find } from '@ember/test-helpers';
import { expect } from 'chai';
import $ from 'jquery';

describe('Acceptance | index', function() {
  setupApplicationTest();

  it('visiting /', async function() {
    await visit('/');

    expect(currentURL()).to.equal('/');
    expect($(find('.test-element'))).to.have.text('hello');
  });
});
