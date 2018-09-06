# Try edit anywhere in Markdown!

This is a markdown editor, that allows you to edit live. Support markdown syntax and hot keys.❤️🔥

---

## Usage

There is two ways to use, you could use it as a complete markdown editor or use as a slate plugin in your editor.

## Usage

Render the complete markdown editor

```js
import Editor from "slate-md-editor";
const MdEditor = Editor(options);

<MdEditor value={value} onChange={this.onChange} />;
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

* **value**: Slate `Value`
* **onChange**: `(Change) => void`

## As slate plugin

Learn more [here](../../plugins/markdown)
