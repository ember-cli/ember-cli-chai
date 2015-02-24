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

Copyright (c) 2015 Jonathan Kingston

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
