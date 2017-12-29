# Changelog

## v0.5.0-beta.1 (2017-12-29)

#### :boom: Breaking Change
* [#41](https://github.com/ember-cli/ember-cli-chai/pull/41) Update "chai" to v4.0.0. ([@Turbo87](https://github.com/Turbo87))
* [#40](https://github.com/ember-cli/ember-cli-chai/pull/40) Remove QUnit support. ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#39](https://github.com/ember-cli/ember-cli-chai/pull/39) Use `lerna-changelog` to generate changelog. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#43](https://github.com/ember-cli/ember-cli-chai/pull/43) Use `ember-cli-mocha` instead of `ember-cli-qunit`. ([@Turbo87](https://github.com/Turbo87))
* [#42](https://github.com/ember-cli/ember-cli-chai/pull/42) Update `ember-cli-babel` and `ember-cli`. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.4.3 (2017-10-02)

#### :rocket: Enhancement
* [#38](https://github.com/ember-cli/ember-cli-chai/pull/38) Switch from babel-preset-es2015 to babel-preset-env. ([@cherewaty](https://github.com/cherewaty))
* [#36](https://github.com/ember-cli/ember-cli-chai/pull/36) Update dependencies. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Jeffrey Cherewaty ([cherewaty](https://github.com/cherewaty))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.4.2 (2017-06-12)

#### :rocket: Enhancement
* [#34](https://github.com/ember-cli/ember-cli-chai/pull/34) Add support for "chai-as-promised@7". ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#35](https://github.com/ember-cli/ember-cli-chai/pull/35) Use yarn instead of npm. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.4.1 (2017-05-12)

#### :rocket: Enhancement
* [#29](https://github.com/ember-cli/ember-cli-chai/pull/29) Configure tdChai shim to import td correctly. ([@alexlafroscia](https://github.com/alexlafroscia))

#### Committers: 1
- Alex LaFroscia ([alexlafroscia](https://github.com/alexlafroscia))


## v0.4.0 (2017-05-04)

#### :boom: Breaking Change
* Updating `ember-cli-babel` to v6.x means increasing the supported minimum Node.js version to 4.x. 

#### :rocket: Enhancement
* [#26](https://github.com/ember-cli/ember-cli-chai/pull/26) Update "ember-cli-babel" to v6.1.0. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#25](https://github.com/ember-cli/ember-cli-chai/pull/25) CI: Use "auto-dist-tag" for deployment. ([@Turbo87](https://github.com/Turbo87))
* [#27](https://github.com/ember-cli/ember-cli-chai/pull/27) Remove unused dependencies. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.2 (2016-12-20)

#### :rocket: Enhancement
* [#21](https://github.com/ember-cli/ember-cli-chai/pull/21) Add support for testdouble-chai. ([@alexlafroscia](https://github.com/alexlafroscia))

#### Committers: 1
- Alex LaFroscia ([alexlafroscia](https://github.com/alexlafroscia))


## v0.3.1 (2016-12-09)

#### :bug: Bug Fix
* [#20](https://github.com/ember-cli/ember-cli-chai/pull/20) Use "var" instead of "let". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.0 (2016-12-06)

#### :rocket: Enhancement
* [#16](https://github.com/ember-cli/ember-cli-chai/pull/16) Replace JSHint with ESLint. ([@Turbo87](https://github.com/Turbo87))
* [#14](https://github.com/ember-cli/ember-cli-chai/pull/14) automatically import sinon-chai. ([@Dhaulagiri](https://github.com/Dhaulagiri))
* [#15](https://github.com/ember-cli/ember-cli-chai/pull/15) Add support for "chai-as-promised" via "rollup". ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#17](https://github.com/ember-cli/ember-cli-chai/pull/17) Update package.json to include qunit from 'addon' folder. ([@polarctos](https://github.com/polarctos))

#### :house: Internal
* [#13](https://github.com/ember-cli/ember-cli-chai/pull/13) Cleanup plugin import code. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Brian Runnells ([Dhaulagiri](https://github.com/Dhaulagiri))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))
- [polarctos](https://github.com/polarctos)


## v0.2.0 (2016-11-26)

#### :rocket: Enhancement
* [#7](https://github.com/ember-cli/ember-cli-chai/pull/7) Import "chai-jquery" and "chai-dom" automatically if available. ([@Turbo87](https://github.com/Turbo87))
* [#6](https://github.com/ember-cli/ember-cli-chai/pull/6) Add QUnit integration. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))
