Table of Contents
=================

* [Format Util](#format-util)
  * [Install](#install)
  * [Usage](#usage)
  * [Developer](#developer)
    * [Test](#test)
    * [Spec](#spec)
    * [Cover](#cover)
    * [Browserify](#browserify)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Docs](#docs)
    * [Readme](#readme)
  * [License](#license)

Format Util
===========

[<img src="https://travis-ci.org/tmpfs/format-util.svg" alt="Build Status">](https://travis-ci.org/tmpfs/format-util)
[<img src="http://img.shields.io/npm/v/format-util.svg" alt="npm version">](https://npmjs.org/package/format-util)
[<img src="https://coveralls.io/repos/tmpfs/format-util/badge.svg?branch=master&service=github&v=1" alt="Coverage Status">](https://coveralls.io/github/tmpfs/format-util?branch=master).

Lightweight `util.format()` for the browser.

## Install

```
npm i format-util
```

## Usage

```javascript
var format = require('format-util')
  , msg = format('%s', 'foo');
```

## Developer

### Test

Run the test specifications:

```
npm test
```

### Spec

Compile test specifications for the browser (open `test/index.html`):

```
npm run spec
```

### Cover

Generate code coverage:

```
npm run cover
```

### Browserify

Create a standalone browserify build:

```
npm run browserify
```

### Lint

Lint the source tree with [jshint](http://jshint.com) and [jscs](http://jscs.info):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Docs

To generate all documentation:

```
npm run docs
```

### Readme

Generate the project readme file [mdp](https://github.com/tmpfs/mdp):

```
npm run readme
```

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](https://github.com/tmpfs/format-util/blob/master/LICENSE) if you feel inclined.

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[mdp]: https://github.com/tmpfs/mdp
[zephyr]: https://github.com/tmpfs/zephyr
[jshint]: http://jshint.com
[jscs]: http://jscs.info
