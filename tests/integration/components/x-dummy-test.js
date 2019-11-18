import { describe, it } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render } from '@ember/test-helpers';
import { expect } from 'chai';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

describe('Integration | Component | x dummy', function() {
  setupRenderingTest();

  it('renders', async function() {
    await render(hbs`{{x-dummy}}`);

    expect($('.dummy'), 'has "foo" text').to.have.text('foo');
  });

  it('renders with attribute', async function() {
    this.set('foo', 'bar');

    await render(hbs`{{x-dummy foo=foo}}`);

    expect($('.dummy'), 'has "bar" text').to.have.text('bar');
    expect($('.dummy'), 'has "foo" class').to.have.class('foo');
  });
});
