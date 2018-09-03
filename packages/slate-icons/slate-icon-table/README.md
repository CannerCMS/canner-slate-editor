# @canner/slate-icon-table

[![npm version](https://badge.fury.io/js/%40canner%2Fslate-icon-table.svg)](https://badge.fury.io/js/%40canner%2Fslate-icon-table)

## Icon

```js
import Table from '@canner/slate-icon-table';
```

#### Props

- **typeTable:** Block type name. Default: `table`
- **options:** Options for https://github.com/GitbookIO/slate-edit-table

## Plugin

```js
import {TablePlugin} from '@canner/slate-icon-table';

// this will add render method for table
const plugins = [
  TablePlugin(options)
]
```
#### Options

- **typeTable:** Table type name. Default: `table`
- **typeRow:** Table row type name. Default: `table_row`
- **typeCell:** Table cell type name. Default:
`table_cell`

