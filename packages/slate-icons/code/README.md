# @canner/slate-icon-code

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-code.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-code)

## Icon

```js
import Code from "@canner/slate-icon-code";
```

#### Props

* **type:** Mark type name. Default: `CODE`

## Plugin

```js
import { CodePlugin } from "@canner/slate-icon-code";

// this will add render method for this mark, and also support hot key for bold.
const plugins = [CodePlugin(options)];
```

#### Hot key

<kbd>CMD</kbd>+<kbd>`</kbd>

#### Options

* **type:** Mark type name. Default: `CODE`
* **tagName:** Rendered tagName in this plugin. Default `<code/>`
