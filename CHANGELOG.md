# Change Log

## [v0.4.3](https://github.com/ember-cli/ember-cli-chai/tree/v0.4.3) (2017-10-02)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.4.2...v0.4.3)

**Implemented enhancements:**

- Update dependencies [\#36](https://github.com/ember-cli/ember-cli-chai/pull/36) ([Turbo87](https://github.com/Turbo87))

**Merged pull requests:**

- Switch from babel-preset-es2015 to babel-preset-env [\#38](https://github.com/ember-cli/ember-cli-chai/pull/38) ([cherewaty](https://github.com/cherewaty))

## [v0.4.2](https://github.com/ember-cli/ember-cli-chai/tree/v0.4.2) (2017-06-12)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.4.1...v0.4.2)

**Implemented enhancements:**

- Support ember-cli-chai@7 [\#31](https://github.com/ember-cli/ember-cli-chai/issues/31)
- Use yarn instead of npm [\#35](https://github.com/ember-cli/ember-cli-chai/pull/35) ([Turbo87](https://github.com/Turbo87))
- Add support for "chai-as-promised@7" [\#34](https://github.com/ember-cli/ember-cli-chai/pull/34) ([Turbo87](https://github.com/Turbo87))

## [v0.4.1](https://github.com/ember-cli/ember-cli-chai/tree/v0.4.1) (2017-05-12)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.4.0...v0.4.1)

**Closed issues:**

- Support `testdouble` without a global [\#28](https://github.com/ember-cli/ember-cli-chai/issues/28)

**Merged pull requests:**

- Configure tdChai shim to import td correctly [\#29](https://github.com/ember-cli/ember-cli-chai/pull/29) ([alexlafroscia](https://github.com/alexlafroscia))

## [v0.4.0](https://github.com/ember-cli/ember-cli-chai/tree/v0.4.0) (2017-05-04)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.3.2...v0.4.0)

**Implemented enhancements:**

- CI: Use "auto-dist-tag" for deployment [\#25](https://github.com/ember-cli/ember-cli-chai/pull/25) ([Turbo87](https://github.com/Turbo87))

**Closed issues:**

- Allow configuring additional plugins in package.json? [\#23](https://github.com/ember-cli/ember-cli-chai/issues/23)
- Release as v1.0.0 [\#18](https://github.com/ember-cli/ember-cli-chai/issues/18)

**Merged pull requests:**

- Remove unused dependencies [\#27](https://github.com/ember-cli/ember-cli-chai/pull/27) ([Turbo87](https://github.com/Turbo87))
- Update "ember-cli-babel" to v6.1.0 [\#26](https://github.com/ember-cli/ember-cli-chai/pull/26) ([Turbo87](https://github.com/Turbo87))
- CI: Switch NPM deploy user to "ember-cli" [\#24](https://github.com/ember-cli/ember-cli-chai/pull/24) ([Turbo87](https://github.com/Turbo87))

## [v0.3.2](https://github.com/ember-cli/ember-cli-chai/tree/v0.3.2) (2016-12-20)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.3.1...v0.3.2)

**Implemented enhancements:**

- Support for testdouble-chai [\#19](https://github.com/ember-cli/ember-cli-chai/issues/19)

**Merged pull requests:**

- Add support for testdouble-chai [\#21](https://github.com/ember-cli/ember-cli-chai/pull/21) ([alexlafroscia](https://github.com/alexlafroscia))

## [v0.3.1](https://github.com/ember-cli/ember-cli-chai/tree/v0.3.1) (2016-12-09)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.3.0...v0.3.1)

**Fixed bugs:**

- Use "var" instead of "let" [\#20](https://github.com/ember-cli/ember-cli-chai/pull/20) ([Turbo87](https://github.com/Turbo87))

## [v0.3.0](https://github.com/ember-cli/ember-cli-chai/tree/v0.3.0) (2016-12-06)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.2.0...v0.3.0)

**Implemented enhancements:**

- Support for sinon-chai [\#9](https://github.com/ember-cli/ember-cli-chai/issues/9)
- Support for chai-as-promised [\#8](https://github.com/ember-cli/ember-cli-chai/issues/8)
- Replace JSHint with ESLint [\#16](https://github.com/ember-cli/ember-cli-chai/pull/16) ([Turbo87](https://github.com/Turbo87))
- Add support for "chai-as-promised" via "rollup" [\#15](https://github.com/ember-cli/ember-cli-chai/pull/15) ([Turbo87](https://github.com/Turbo87))

**Fixed bugs:**

- Update package.json to include qunit from 'addon' folder [\#17](https://github.com/ember-cli/ember-cli-chai/pull/17) ([polarctos](https://github.com/polarctos))

**Merged pull requests:**

- automatically import sinon-chai [\#14](https://github.com/ember-cli/ember-cli-chai/pull/14) ([Dhaulagiri](https://github.com/Dhaulagiri))
- Cleanup plugin import code [\#13](https://github.com/ember-cli/ember-cli-chai/pull/13) ([Turbo87](https://github.com/Turbo87))

## [v0.2.0](https://github.com/ember-cli/ember-cli-chai/tree/v0.2.0) (2016-11-26)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.1.0...v0.2.0)

**Implemented enhancements:**

- Using with QUnit? [\#3](https://github.com/ember-cli/ember-cli-chai/issues/3)
- Import "chai-jquery" and "chai-dom" automatically if available [\#7](https://github.com/ember-cli/ember-cli-chai/pull/7) ([Turbo87](https://github.com/Turbo87))
- Add QUnit integration [\#6](https://github.com/ember-cli/ember-cli-chai/pull/6) ([Turbo87](https://github.com/Turbo87))

**Fixed bugs:**

- problem using with most recent ember-cli [\#4](https://github.com/ember-cli/ember-cli-chai/issues/4)

## [v0.1.0](https://github.com/ember-cli/ember-cli-chai/tree/v0.1.0) (2016-11-25)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.10...v0.1.0)

## [v0.0.10](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.10) (2015-06-01)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.9...v0.0.10)

## [v0.0.9](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.9) (2015-04-08)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.7...v0.0.9)

**Fixed bugs:**

- error upon install [\#2](https://github.com/ember-cli/ember-cli-chai/issues/2)

## [v0.0.7](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.7) (2015-04-07)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.6...v0.0.7)

## [v0.0.6](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.6) (2015-04-07)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.5...v0.0.6)

## [v0.0.5](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.5) (2015-03-08)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.4...v0.0.5)

## [v0.0.4](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.4) (2015-02-24)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.2...v0.0.4)

## [v0.0.2](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.2) (2015-02-17)
[Full Changelog](https://github.com/ember-cli/ember-cli-chai/compare/v0.0.1...v0.0.2)

## [v0.0.1](https://github.com/ember-cli/ember-cli-chai/tree/v0.0.1) (2015-02-17)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
