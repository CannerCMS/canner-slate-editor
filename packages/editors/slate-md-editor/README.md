# slate-md-editor

[![npm version](https://badge.fury.io/js/slate-md-editor.svg)](https://badge.fury.io/js/slate-md-editor)

A markdown editor, that allows you to edit live. This project is built on top of [slate framework](http://slatejs.org/#/). Support markdown syntax and hot keys.

## Live 

![demo](https://i.imgur.com/OqQMMiC.gif)

----

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

See complete markdown plugin's [options](../../plugins/markdown)
