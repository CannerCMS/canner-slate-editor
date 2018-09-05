# @canner/slate-icon-bold

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-bold.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-bold)

## Icon

```js
import Bold from "@canner/slate-icon-bold";
```

#### Props

* **type:** Mark type name. Default: `BOLD`

## Plugin

```js
import { BoldPlugin } from "@canner/slate-icon-bold";

// this will add render method for this mark, and also support hot key for bold.
const plugins = [BoldPlugin(options)];
```

#### Hot key

<kbd>CMD</kbd>+<kbd>b</kbd>

#### Options

* **type:** Mark type name. Default: `BOLD`
* **tagName:** Rendered tagName in this plugin. Default `<strong/>`
