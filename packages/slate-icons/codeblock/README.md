# @canner/slate-icon-codeBlock

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-codeBlock.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-codeBlock)

**Icon:**

```js
import CodeBlock from "@canner/slate-icon-codeBlock";
```

**Plugin:**

```js
import { CodeBlockPlugin } from "@canner/slate-icon-codeBlock";
```

Also you'll need to add these two plugins to make code blocks work:

```js
import EditPrism from "slate-prism";
import EditCode from "slate-edit-code";

plugins = [
  EditPrism({
    onlyIn: node => node.type === "code_block",
    getSyntax: node => node.data.get("syntax")
  }),
  EditCode({
    onlyIn: node => node.type === "code_block"
  })
];
```
