import { moduleForComponent, test } from 'ember-qunit';
import { withChai } from 'ember-cli-chai/qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-dummy', 'Integration | Component | x dummy', {
  integration: true
});

test('it renders', withChai(function(expect) {
  this.render(hbs`{{x-dummy}}`);

  expect(this.$('.dummy'), 'has "foo" text').to.have.text('foo');
}));

test('it renders with attribute', withChai(function(expect) {
  this.set('foo', 'bar');

  this.render(hbs`{{x-dummy foo=foo}}`);

  expect(this.$('.dummy'), 'has "bar" text').to.have.text('bar');
  expect(this.$('.dummy'), 'has "foo" class').to.have.class('foo');
}));
