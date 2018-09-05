# @canner/slate-icon-underline

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-underline.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-underline)

## Icon

```js
import Underline from "@canner/slate-icon-underline";
```

#### Props

* **type:** Mark type name. Default: `UNDERLINE`

## Plugin

```js
import { UnderlinePlugin } from "@canner/slate-icon-underline";

// this will add render method for this mark, and also support hot key for underline.
const plugins = [UnderlinePlugin(options)];
```

#### Hot key

<kbd>CMD</kbd>+<kbd>u</kbd>

#### Options

* **type:** Mark type name. Default: `UNDERLINE`
* **tagName:** Rendered tagName in this plugin. Default `<u/>`
