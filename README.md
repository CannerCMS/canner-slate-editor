# slate-md-editor

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-md-editor.svg)](https://badge.fury.io/js/%40canner%2Fslate-md-editor)

A markdown editor, that allows you to edit live.

## Live 

![demo](https://i.imgur.com/eLOCvlu.gif)

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

### Bold

**In editor enter:**

```
**strong**[space]
or
__strong__[space]
```

### Italic

**In editor enter:**

```
_italic_[space]
or
*italic*[space]
```

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