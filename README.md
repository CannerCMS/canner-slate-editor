# slate-md-editor

[![npm version](https://badge.fury.io/js/slate-md-editor.svg)](https://badge.fury.io/js/slate-md-editor)

A markdown editor, that allows you to edit live. This project is built on top of [slate framework](http://slatejs.org/#/). Support markdown syntax and hot keys.

## Live 

![demo](https://i.imgur.com/OqQMMiC.gif)

DEMO: [https://canner.github.io/slate-md-editor/](https://canner.github.io/slate-md-editor/)


## Usage

There is two ways to use, you could use it as a complete markdown editor or use as a slate plugin in your editor.

## Complete markdown editor

```
npm install slate-md-editor
```

Render the complete markdown editor

```js
import Editor from 'slate-md-editor';
const MdEditor = Editor(options);

<MdEditor
  value={value}
  onChange={this.onChange}
/>
```

### Options

Pass your customized settings here.

`slate-md-editor` build on top of various slate plugins, `[xxxxOption]` will pass it's settings directly to corresponding plugins.

```js
// default settings
{
  markdownOption: {
    blocks: BLOCKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/blocks.js
    marks: MARKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/marks.js
    inlines: INLINES, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/inlines.js
  },
  prismOption: {
    // https://github.com/GitbookIO/slate-prism
    onlyIn: node => node.type === 'code_block',
    getSyntax: node => node.data.get('syntax')
  },
  codeOption: {
    // https://github.com/GitbookIO/slate-edit-code
    onlyIn: node => node.type === 'code_block'
  },
  blockquoteOption: {
    // https://github.com/GitbookIO/slate-edit-blockquote
  },
  listOption: {
    // https://github.com/GitbookIO/slate-edit-list
    types: ['ordered_list', 'unordered_list'],
    typeItem: 'list_item',
    typeDefault: 'paragraph'
  }
}
```

### Props

- **value**: Slate `Value`
- **onChange**: `(Change) => void`

## As slate plugin

```js
import {MarkdownPlugin} from 'slate-md-editor';
const plugins = [
  MarkdownPlugin(options)
]

<Editor
  value={value}
  onChange={this.onChange}
  plugins={plugins}
/>
```

### Options

`MarkdownPlugin` also use many other plugins as dependencies, and allows you to pass their customized settings.

Additionally, ***blocks, marks, inlines*** default types are the same as [Markup-it](https://github.com/GitbookIO/markup-it).


```js
// Default settings
{
  blocks: BLOCKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/blocks.js
  marks: MARKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/marks.js
  inlines: INLINES, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/inlines.js
  codeOption: {
    // https://github.com/GitbookIO/slate-edit-code
    onlyIn: node => node.type === BLOCKS.CODE
  },
  blockquoteOption: {
    // https://github.com/GitbookIO/slate-edit-blockquote

  },
  listOption: {
    // https://github.com/GitbookIO/slate-edit-list
  }
}
```

If you want to change a type, you could set that specific key type alone, without all types.

For example, you want to change `BOLD` default type to `bold_type`. Just pass object as below

```js
{
  marks: {BOLD: 'bold_type'}
}
```

This will replace default `BOLD` setting to your new setting.

# Feature TOC

- [Blockquote](#blockquote)
- [Code block (inline)](#code-block-inline)
- [Code block (triple backticks)](#code-block-triple-backticks)
- [Header](#header)
- [Bold](#bold)
- [Italic](#italic)
- [Bold + Italic](#bold--italic)
- [Strikethrough](#strikethrough)
- [Hr](#hr)
- [Link](#link)
- [Image](#image)
- [Unordered List](#unordered-list)
- [Ordered List](#ordered-list)

## Support

### Blockquote

**In editor enter:**

```
>[space]Blockquote
```

***Hot key***

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>q</kbd>

### Code block (inline)

**In editor enter:**

```
[space * 4]Code block
```

### Code block (triple backticks)

**In editor enter:**

```
[` * 3][space] Code block
```

Use specific language:

```
[` * 3][lang][space] Code block
```

for example:

```js
const wow = test()
```

***Hot key***

<kbd>CMD</kbd>+<kbd>Enter</kbd>: to exit code block

### Header

**In editor enter:**

```
[# * 1~6][space] Header
```

Example

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

***Hot keys***

**Header 1**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>1</kbd>

**Header 2**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>2</kbd>

**Header 3**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>3</kbd>

**Header 4**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>4</kbd>

**Header 5**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>5</kbd>

**Header 6**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>6</kbd>

### Bold

**In editor enter:**

```
**strong**[space]
or
__strong__[space]
```

***Hot key***

<kbd>CMD</kbd>+<kbd>b</kbd>

### Italic

**In editor enter:**

```
_italic_[space]
or
*italic*[space]
```

***Hot key***

<kbd>CMD</kbd>+<kbd>i</kbd>

### Bold + Italic

**In editor enter:**

```
___[strong + italic]___[space]
or
***[strong + italic]***[space]
```

### Strikethrough

**In editor enter:**

```
~[strikethrough]~[space]
```

***Hot key***

<kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>d</kbd>

### Hr

**In editor enter:**

```
***
or
---
```

### Link

**In editor enter:**

```
[example](http://example.com "Optional title")[space]
```

### Image

**In editor enter:**

```
![example](http://example.com "Optional title")[space]
```

### Unordered list

**In editor enter:**

```
*[space]
or
+[space]
or
-[space]
```

### Ordered List

**In editor enter:**

```
1.[space]
```

## Related projects

1. **Another rich text editor using Slate framework, with beautiful design:  https://github.com/Canner/canner-slate-editor**
3. **20+ shared slate icons, selectors and helpers for Slate editors, in a monorepo: https://github.com/Canner/slate-editor-icons**
2. **Quick and customizable way to implement medium like toolbar in your slate editor: https://github.com/Canner/slate-toolbar**