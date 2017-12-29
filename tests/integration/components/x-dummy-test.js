import { moduleForComponent, test } from 'ember-qunit';
import { expect } from 'chai';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-dummy', 'Integration | Component | x dummy', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{x-dummy}}`);

  expect(this.$('.dummy'), 'has "foo" text').to.have.text('foo');
});

test('it renders with attribute', function(assert) {
  assert.expect(0);

  this.set('foo', 'bar');

  this.render(hbs`{{x-dummy foo=foo}}`);

  expect(this.$('.dummy'), 'has "bar" text').to.have.text('bar');
  expect(this.$('.dummy'), 'has "foo" class').to.have.class('foo');
});
