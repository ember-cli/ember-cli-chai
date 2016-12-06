
ember-cli-chai
==============================================================================

[![npm](https://img.shields.io/npm/v/ember-cli-chai.svg)](https://www.npmjs.com/package/ember-cli-chai)
[![Build Status](https://travis-ci.org/ember-cli/ember-cli-chai.svg?branch=master)](https://travis-ci.org/ember-cli/ember-cli-chai)

[Chai](http://chaijs.com/) assertions for [Ember.js](http://emberjs.com/).
Works with both QUnit and Mocha!


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-chai
```

Usage
------------------------------------------------------------------------------

After installing `ember-cli-chai` you can import [Chai](http://chaijs.com/)
from the `chai` package:

```js
import chai from 'chai';
```

of import the `expect()` function directly:

```js
import { expect } from 'chai';
```

Have a look at the [vendor shim](vendor/shims/chai.js) file to understand
what else can be imported this way.


### QUnit

QUnit can be used with Chai directly, but it is recommended to use our
`withChai()` integration:

```js
import { module, test } from 'qunit';
import { withChai } from 'ember-cli-chai/qunit';

module('test');

test('it works', withChai(function(expect, assert) {
  assert.expect(1);
  expect(5, '5 < 10').to.be.below(10);
}));
```

- Import the `withChai()` function from `ember-cli-chai/qunit`
- Wrap all test functions in `withChai(...)` and add `expect` as the
  first argument

### Chai plugins

`ember-cli-chai` is able to automatically load a number of popular
[Chai plugins](http://chaijs.com/plugins/):

- [`chai-jquery`](https://github.com/chaijs/chai-jquery) – JQuery assertions
- [`chai-dom`](https://github.com/nathanboktae/chai-dom) – DOM assertions
- [`chai-as-promised`](https://github.com/domenic/chai-as-promised) – Promise assertions
- [`sinon-chai`](https://github.com/domenic/sinon-chai) – Sinon assertions

All you have to do is install those plugins via `npm install --save-dev`.
Once they are installed and listed as dependencies in your `package.json` file
they will be used automatically.

Using `chai-jquery` for example will enable you to write JQuery assertions
like:

```js
expect(find('.test-element')).to.have.text('hello');
```


License
------------------------------------------------------------------------------
ember-cli-chai is licensed under the [MIT License](LICENSE.md).
