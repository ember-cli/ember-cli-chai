import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import { expect } from 'chai';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | x dummy', function() {
  setupComponentTest('x-dummy', { integration: true });

  it('renders', function() {
    this.render(hbs`{{x-dummy}}`);

    expect(this.$('.dummy'), 'has "foo" text').to.have.text('foo');
  });

  it('renders with attribute', function() {
    this.set('foo', 'bar');

    this.render(hbs`{{x-dummy foo=foo}}`);

    expect(this.$('.dummy'), 'has "bar" text').to.have.text('bar');
    expect(this.$('.dummy'), 'has "foo" class').to.have.class('foo');
  });
});
