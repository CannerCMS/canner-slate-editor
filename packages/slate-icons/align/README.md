# @canner/slate-icon-align

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-align.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-align)

## Icons

Export components:

* AlignCenter: value `center`
* AlignLeft: value `left`
* AlignRight: value `right`

This will add a data key called `align` (change the data key by passing `this.props.type`): value is one of `center`, `left`, `right`.

```js
import { AlignCenter, AlignLeft, AlignRight } from "@canner/slate-icon-align";
```

#### Props

* **type:** block's data key name. Default: `align`

## Plugin

```js
import { ParagraphPlugin } from "@canner/slate-icon-shared";

const plugin = [ParagraphPlugin(option)];
```

#### Hot key

**Align center:**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>c</kbd>

**Align left:**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>l</kbd>

**Align right:**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>r</kbd>
