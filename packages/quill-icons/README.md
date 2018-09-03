# quill-icons [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Editor icons extract from quill editor, with React component wrapper, support 65+ icons!

## Installation

```sh
$ npm install --save quill-icons
```

## Usage

```js
var quillIcons = require('quill-icons');

// icons options see ./src/icons
// USAGE: 

<quillIcons.AlignCenter/>  // React element

```

Icons support: https://canner.github.io/quill-icons/

## Props

You could customized stroke, fill, etc... class names, just pass as props.

```js
export default {
  strokeClassName: 'ql-stroke',
  fillClassName: 'ql-fill',
  evenClassName: 'ql-even',
  colorLabelClassName: 'ql-color-label',
  transparentClassName: 'ql-transparent',
  strokeMitterClassName: 'ql-stroke-mitter',
  thinClassName: 'ql-thin',
  width: '18px',
  height: '18px'
};
```

## License

BSD-3-Clause © [Canner](https://github.com/Canner)

Big thanks to [Quilljs](https://github.com/quilljs)

Icons license see [Quill License](https://github.com/quilljs/quill/blob/develop/LICENSE)


[npm-image]: https://badge.fury.io/js/quill-icons.svg
[npm-url]: https://npmjs.org/package/quill-icons
[travis-image]: https://travis-ci.org/Canner/quill-icons.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/quill-icons
[daviddm-image]: https://david-dm.org/Canner/quill-icons.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/quill-icons
