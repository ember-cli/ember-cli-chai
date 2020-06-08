
ember-cli-chai
==============================================================================

[![npm](https://img.shields.io/npm/v/ember-cli-chai.svg)](https://www.npmjs.com/package/ember-cli-chai)
[![Build Status](https://travis-ci.org/ember-cli/ember-cli-chai.svg?branch=master)](https://travis-ci.org/ember-cli/ember-cli-chai)

[Chai](http://chaijs.com/) assertions for [Ember.js](http://emberjs.com/).

Deprecated
------------------------------------------------------------------------------

This package is **deprecated**. Please use [ember-auto-import](https://github.com/ef4/ember-auto-import) to use chai and chai plugins directly. If you'd like to use chai, or were previously using ember-cli-chai, follow these instructions to use chai in your app:

Add `ember-auto-import` and `chai` to your project:

`ember install ember-auto-import chai`

Next, if you are using any plugins, add the following to `tests/test-helper.js` _before_ calling `start` from `ember-mocha` to ensure chai has loaded them:

```javascript
// tests/test-helper.js
import { start } from 'ember-mocha';
import chai from 'chai';
import chaiDom from 'chai-dom';
chai.use(chaiDom);
start();
```


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

or import the `expect()` function directly:

```js
import { expect } from 'chai';
```

Have a look at the [vendor shim](vendor/shims/chai.js) file to understand
what else can be imported this way.


### QUnit

Previous versions of `ember-cli-chai` [supported QUnit](https://github.com/ember-cli/ember-cli-chai/pull/6)
but due to changes in `chai` itself this is unfortunately no longer viable.
For readable DOM assertions in QUnit we recommend [qunit-dom](https://github.com/simplabs/qunit-dom)
instead.


### Chai plugins

`ember-cli-chai` is able to automatically load a number of popular
[Chai plugins](http://chaijs.com/plugins/):

- [`chai-jquery`](https://github.com/chaijs/chai-jquery) – JQuery assertions
- [`chai-dom`](https://github.com/nathanboktae/chai-dom) – DOM assertions
- [`chai-as-promised`](https://github.com/domenic/chai-as-promised) – Promise assertions
- [`sinon-chai`](https://github.com/domenic/sinon-chai) – Sinon assertions
- [`testdouble-chai`](https://github.com/BaseCase/testdouble-chai) - testdouble.js assertions

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
