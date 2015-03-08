# Ember-cli-chai

Ember addon wrapper for [Chaijs](https://github.com/chaijs/chai) assertion library.


## Installation

```
ember install:addon ember-cli-chai
```

## Use

**Assert**

```
import { assert } from 'chai';
```

**Expect**

```
import { expect } from 'chai';
```

**Should usage warning** - by using should, you will likely cause issues with the rest of your tests.
Should works by modifying native `Object.prototype` which will leak into every module.
Developers should consider using `assert` or `expect` instead [Further explanation](https://github.com/switchfly/ember-cli-mocha/issues/14#issuecomment-75466055).

## Licence

The MIT License (MIT)

Copyright (c) 2015 Jonathan Kingston

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
