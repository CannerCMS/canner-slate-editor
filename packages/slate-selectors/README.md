

Supported selectors:

- [Font size - @canner/slate-select-fontsize](./packages/slate-select-fontsize)
- [Line height - @canner/slate-select-lineheight](./packages/slate-select-lineheight)
- [Letter spacing - @canner/slate-letterspacing](./packages/slate-select-letterspacing)

## Selectors' props

All selectors must passed these two props to ensure working properly.

| **props** | **type** | **required** | **default** | **description**  |
|-----------|----------|--------------|-------------|------------------|
| type     | string   | false        | each icons are different  | customized block/mark types |
| change     | object   | true        | null          | changes to value |
| onChange  | func   | true         | null         | onChange function usually `change => this.setState({value})` to update slate state  |
