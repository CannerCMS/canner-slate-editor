# @canner/slate-icon-italic

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-italic.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-italic)

## Icon

```js
import Italic from "@canner/slate-icon-italic";
```

#### Props

* **type:** Mark type name. Default: `ITALIC`

## Plugin

```js
import { ItalicPlugin } from "@canner/slate-icon-italic";

// this will add render method for this mark, and also support hot key for italic.
const plugins = [ItalicPlugin(options)];
```

#### Hot key

<kbd>CMD</kbd>+<kbd>i</kbd>

#### Options

* **type:** Mark type name. Default: `ITALIC`
* **tagName:** Rendered tagName in this plugin. Default `<i/>`
