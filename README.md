# slate-md-editor [![Greenkeeper badge](https://badges.greenkeeper.io/Canner/slate-md-editor.svg?token=8d701143863d7b8431a3893c29e93ab89e6c9fde33a06a4b73b3971971740b37&ts=1521899598949)](https://greenkeeper.io/)

A markdown editor, that allows you to edit live. 

## TOC

- [Blockquote](#blockquote)
- [Code block (inline)](#code-block-inline)
- [Code block (triple backticks)](#code-block-triple-backticks)
- [Header](#header)
- [Bold](#bold)
- [Italic](#italic)
- [Hr](#hr)
- [Link](#link)
- [Image](#image)
- [Unordered List](#unordered-list)
- [Ordered List](#ordered-list)

## Live 

![demo](https://i.imgur.com/eLOCvlu.gif)

DEMO: [https://canner.github.io/slate-md-editor/](https://canner.github.io/slate-md-editor/)

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
**strong**
```

### Italic

**In editor enter:**

```
_italic_
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
[example](http://example.com "Optional title")
```

### Image

**In editor enter:**

```
![example](http://example.com "Optional title")
```

### Unordered list

**In editor enter:**

```
*[space]
or
+[space]
or
- [space]
```

### Ordered List

**In editor enter:**

```
1.[space]
```