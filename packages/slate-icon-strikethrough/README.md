# @canner/slate-icon-strikethrough

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-strikethrough.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-strikethrough)

## Icon

```js
import Strikethrough from '@canner/slate-icon-strikethrough';
```

#### Props

- **type:** Mark type name. Default: `STRIKETHROUGH`

## Plugin

```js
import {StrikeThroughPlugin} from '@canner/slate-icon-strikethrough';

// this will add render method for this mark, and also support hot key for strikethrough.
const plugins = [
  StrikeThroughPlugin(options)
]
```

#### Hot key

<kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>d</kbd>

#### Options

- **type:** Mark type name. Default: `STRIKETHROUGH`
- **tagName:** Rendered tagName in this plugin. Default `<s/>`

