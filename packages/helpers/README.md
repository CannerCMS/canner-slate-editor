# slate-helpers
> A set of helper and utility functions for Slate editors.

## Usage

This repository is maintain in a monorepo see packages in `packages` folder.

# Helper packages

## Blocks

#### `@canner/slate-constant`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-constant.svg)](https://badge.fury.io/js/%40canner%2Fslate-constant)

Shared slate type variables.

#### `@canner/slate-helper-block-adddata`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-block-adddata.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-block-adddata)

`fn(change: Change, data: Object) => Change`

Add additional data to block, this could be useful in implement things like align.

#### `@canner/slate-helper-block-quote`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-block-quote.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-block-quote)

`fn(change: Change, options: Object) => Change`

This plugin is based on https://github.com/GitbookIO/slate-edit-blockquote, will wrapped block quote if the selection is not within a blockquote, otherwise unwrapped it.

#### `@canner/slate-helper-block-cleardatabykey`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-block-cleardatabykey.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-block-cleardatabykey)

`fn(change: Change, dataKey: String) => Change`

This remove a data key that stores in current block type

#### `@canner/slate-helper-block-list`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-block-list.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-block-list)

`fn(change: Change, options: Object) => Change`

This plugin is based on https://github.com/GitbookIO/slate-edit-list/, will wrap to block list, if it's wrapped unwrap it.

## Inlines

#### `@canner/slate-helper-inline-adddata`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-inline-adddata.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-inline-adddata)

`fn(change: Change, data: Object) => Change`

Add additional data to inline, this could be useful in implement things like align.

#### `@canner/slate-helper-inline-links`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-inline-links.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-inline-links)

`fn(change: Change, type: String, options: Object) => Change`

insert a link with `options.href` settings, wrapped inline if the selection is expanded, and unwrap if it is a link.

## Marks

#### `@canner/slate-helper-mark-addoverwrite`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-addoverwrite.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-addoverwrite)

`fn(change: Change, options: Object) => Change`

If the selected marks have type that is equal to `options.type`, will be removed the original one and add a new mark with the option settings.

#### `@canner/slate-helper-mark-removeall`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-removeall.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-removeall)

`fn(change: Change) => Change`

Remove all marks in the selection.

#### `@canner/slate-helper-mark-removetype`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-removetype.svg)](https://badge.fury.io/js/%40canner%2Fslate-helper-mark-removetype)

`fn(change: Change, type: String) => Change`

Remove specific mark type in the selection.


## Maintainer

[chilijung](https://github.com/chilijung)

## License

MIT © [Canner](https://github.com/canner)


<a href="https://canner.io">
  <img src="https://user-images.githubusercontent.com/26116324/37811196-a437d930-2e93-11e8-97d8-0653ace2a46d.png"/>
</a>
