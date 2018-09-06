# Try edit anywhere in Markdown!

This is a markdown editor, that allows you to edit live. Support markdown syntax and hot keys.❤️🔥

---

## Usage

There is two ways to use, you could use it as a complete markdown editor or use as a slate plugin in your editor.

# Feature TOC

* [Blockquote](#blockquote)
* [Code block (inline)](#code-block-inline)
* [Code block (triple backticks)](#code-block-triple-backticks)
* [Header](#header)
* [Bold](#bold)
* [Italic](#italic)
* [Bold + Italic](#bold--italic)
* [Strikethrough](#strikethrough)
* [Hr](#hr)
* [Link](#link)
* [Image](#image)
* [Unordered List](#unordered-list)
* [Ordered List](#ordered-list)

## Support

### Blockquote

**In editor enter:**

```
>[space]Blockquote
```

**_Hot key_**

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
const wow = test();
```

**_Hot key_**

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

**_Hot keys_**

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

**_Hot key_**

<kbd>CMD</kbd>+<kbd>b</kbd>

### Italic

**In editor enter:**

```
_italic_[space]
or
*italic*[space]
```

**_Hot key_**

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

**_Hot key_**

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
