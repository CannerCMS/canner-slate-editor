
# Utilities packages

## `@canner/slate-util-get`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-util-get.svg)](https://badge.fury.io/js/%40canner%2Fslate-util-get)

Supported methods:

#### `getMarkType`

`getMarkType(change: Change, type: String) => List<Mark>`

Get marks that is a specific type in the selection.

#### `getBlockType`

`getBlockType(change: Change, type: String) => List<Block>`

Get blocks that is a specific type in the selection.

## `@canner/slate-util-have`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-util-have.svg)](https://badge.fury.io/js/%40canner%2Fslate-util-have)

Supported methods:

#### `haveMarks`

`haveMarks(change: Change, type: String) => Boolean`

The selected area have a specific mark type.

#### `haveBlocks`

`haveBlocks(change: Change, type: String) => Boolean`

The selected area have a specific block type.


#### `haveInlines`

`haveInlines(change: Change, type: String) => Boolean`

The selected area have a specific inline type.

#### `haveDataKeyInSomeBlocks`

`haveDataKeyInSomeBlocks(change: Change, dataKey: String) => Boolean`

Whether there is a specific data key in some blocks.

#### `haveDataKeyInSomeMarks`

`haveDataKeyInSomeMarks(change: Change, dataKey: String) => Boolean`

Whether there is a specific data key in some marks.

## `@canner/slate-util-what`

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-util-what.svg)](https://badge.fury.io/js/%40canner%2Fslate-util-what)

Supported methods:

#### `whatMarkTypes`

`whatMarkTypes(change: Change) => List<string>`

What are the types that the marks have in the selection.

#### `whatBlockTypes`

`whatBlockTypes(change: Change) => List<string>`

What are the types that the blocks have in the selection.

#### `whatInlineTypes`

`whatInlineTypes(change: Change) => List<string>`

What are the types that the inline have in the selection.

