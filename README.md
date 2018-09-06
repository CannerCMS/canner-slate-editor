# canner-slate-editor [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://canner.github.io/canner-slate-editor/)

> 📝 Rich text / WYSIWYG editor focus on **modularity and extensibility**, build on top of [Slate framework](https://docs.slatejs.org) with beautiful designs and high-level APIs.

👇 **_canner-slate-editor is a modulized editor, everything is a npm module! You could 100% compose to your personal usage!_**

<img src="./preview/demo-module.png"/>

## Why not use Slate directly?

[`Slate`](https://github.com/ianstormtaylor/slate) is a well-designed powerful **editor framework** that helps you deal with difficult parts when building an editor, such as data modeling, updating states, rendering, editor schemas, serializing... (you could learn more [here](https://github.com/ianstormtaylor/slate#why)), while you are trying to build your own editors, it still need a lot of efforts to build a simple beautiful editor up and running with the framework.

This repository aims to provide complete editors and plugins solutions that allows you to use it right away, instead of digging through slate documentations and using our high-level components you could almost build editors without any slate framework knowledge to use.

## Why another editor?

**Since this project is originally started from [Canner](https://github.com/Canner/canner), we notice that there is NO SINGLE editor is going to fit in all varieties of requirements, so we think the only way to solve this issue is to design a modular-first editor.**

There are many other rich text and WYSIWYG editors online, but as [slate - why section](https://github.com/ianstormtaylor/slate#why) mentioned that most of these solutions are

1.  Not small and reusable
2.  Hardcoded and hard to customize
3.  Re-inventing the view layer seemed inefficient and limiting
4.  ...

Hence, this repository will try to keep all the advantages slate framework provides and create a more high level APIs for developers could also easily reuse and customize their own version of editor. Also we are always welcome to all kinds of contributions! 🙌

# Project structure

This projects currently contains over **47+ npm modules**, every features are packaged into npm modules, such as icons, helpers, plugins, utils, etc..., so this enable developers to pick modules to assemble into your own usages.

## 1. canner-slate-editor ![npm-image](https://badge.fury.io/js/canner-slate-editor.svg)

> Another rich text editor using Slate framework, with beautiful design

### Installation

```sh
$ npm install --save canner-slate-editor
```

* Learn more [canner-slate-editor](./packages/editors/canner-slate-editor)
* [Demo](https://canner.github.io/canner-slate-editor/?selectedKind=canner-slate-editor)

<img src="./preview/demo.png"/>

## 2. slate-md-editor ![npm-image](https://badge.fury.io/js/slate-md-editor.svg)

> A markdown editor, that allows you to edit live with hot keys support!

### Installation

```sh
$ npm install --save slate-md-editor
```

* Learn more [slate-md-editor](./packages/editors/slate-md-editor)
* [Demo](https://canner.github.io/canner-slate-editor/?selectedKind=slate-md-editor)

<img src="https://i.imgur.com/OqQMMiC.gif" height="600px" style="border:1px solid #CCC;"/>

## 3. slate-icons

> 20+ shared slate icons and helpers for Slate editors.

**_Supported features:_**

* [Align - @canner/slate-icon-align](./packages/slate-icons/align) - center, left, right
* [Blockquote - @canner/slate-icon-blockquote](./packages/slate-icons/blockquote)
* [Bold - @canner/slate-icon-bold](./packages/slate-icons/bold)
* [Clean - @canner/slate-icon-clean](./packages/slate-icons/clean)
* [Code - @canner/slate-icon-code](./packages/slate-icons/code)
* [CodeBlock - @canner/slate-icon-codeblock](./packages/slate-icons/codeblock)
* [Emoji - @canner/slate-icon-emoji](./packages/slate-icons/emoji)
* [Font background color - @canner/slate-icon-fontbgcolor](./packages/slate-icons/font-bg-color)
* [Font color - @canner/slate-icon-fontcolor](./packages/slate-icons/font-color)
* [Hr - @canner/slate-icon-hr](./packages/slate-icons/hr)
* [Header - @canner/slate-icon-header](./packages/slate-icons/header) - header 1, header 2, header 3, header 4, header 5, header 6
* [Image - @canner/slate-icon-image](./packages/slate-icons/image)
* [Indent - @canner/slate-icon-indent](./packages/slate-icons/indent) - indent, outdent
* [Italic - @canner/slate-icon-italic](./packages/slate-icons/italic)
* [Link - @canner/slate-icon-link](./packages/slate-icons/link)
* [List - @canner/slate-icon-list](./packages/slate-icons/list) - Ol list, Ul list
* [Strike through - @canner/slate-icon-strikethrough](./packages/slate-icons/strikethrough)
* [Underline - @canner/slate-icon-underline](./packages/slate-icons/underline)
* [Undo - @canner/slate-icon-undo](./packages/slate-icons/undo)
* [Redo - @canner/slate-icon-redo](./packages/slate-icons/redo)
* [Video - @canner/slate-icon-video](./packages/slate-icons/video)
* [Table - @canner/slate-icon-table](./packages/slate-icons/table)

👉 Learn more [slate-icons](./packages/slate-icons)

## 4. slate-selectors

> shared slate selectors for Slate editors.

**_Supported selectors:_**

* [Font size - @canner/slate-select-fontsize](./packages/slate-selector/fontsize)
* [Line height - @canner/slate-select-lineheight](./packages/slate-selector/line-height)
* [Letter spacing - @canner/slate-letterspacing](./packages/slate-selector/letter-spacing)

👉 Learn more [slate-selectors](./packages/slate-selectors)

## 5. quill-icons ![npm-image](https://badge.fury.io/js/quill-icons.svg)

> Icons extract from quill editor with React component wrapper, support 65+ icons!

### Installation

```sh
$ npm install --save quill-icons
```

* Learn more [quill-icons](./packages/quill-icons)
* [Complete list](https://canner.github.io/canner-slate-editor/?selectedKind=Quill%20icons)

## 6. slate plugins

> A set of slate plugins.

* [plugins](./packages/plugins)

## 7. slate-utils & slate-changes

> A set of changes and utility functions for Slate editors

* [changes](./packages/changes)
* [utils](./packages/utils)
* [renderer](./packages/renderer)

## 8. Editor utils components

> A set of editor utility components.

* [sidebar](./packages/components/sidebar)
  * [Demo](https://canner.github.io/canner-slate-editor/?selectedKind=Editor%20sidebar)
* [toolbar](./packages/components/toolbar)
  * [Demo](https://canner.github.io/canner-slate-editor/?selectedKind=Editor%20popup%20toolbar)

## 9. slate-constant

> Share constants through repos.

👉 Learn more [slate-constant](./packages/slate-constant)

# Development

We are using `yarn` workspace to manage all repos, learn more about [Yarn workspace](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

To install packages

```
yarn
```

See demos

```
npm start
```

# Test

You need to build js files through babel by entering

```
yarn run build:watch
```

## Run test independently

```
yarn jest <...path/to/pkg> [--coverage]
```

<a href="https://canner.io">
  <img src="https://user-images.githubusercontent.com/26116324/37811196-a437d930-2e93-11e8-97d8-0653ace2a46d.png"/>
</a>
