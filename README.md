# preact-prism [![npm version](https://img.shields.io/npm/v/preact-prism.svg?style=flat)](https://www.npmjs.com/package/preact-prism)
use [Prism](http://prismjs.com) syntax highlighter in preact projects.
## Install

``` sh
npm install preact-prism
```
or

``` sh
yarn add preact-prism
```
## Example

``` js
import { h, render } from 'preact';
import Code from 'preact-prism';
import 'prismjs/themes/prism-solarizedlight.css'; /* import prism themes */

const code = `
.container {
  position: relative;
  height: 100%;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
`;

render(<Code code={code} language="css" />, document.body);
```

