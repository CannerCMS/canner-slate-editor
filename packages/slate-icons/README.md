# slate-editor-icons

> Shared icons and render functions for slate editors, icons are extracted from [Quill editor](https://quilljs.com/) (see [quill-icons](../quill-icons) for more information)

### IMPORTANT NOTE:

`slate-editor-icons` are for managing feature functions and components.

## Usage

Install icons that you want to support in your slate project, and pass slate editor `change (value.change())` and `onChange` function as props into the component. When users click these icons it will apply changes and trigger onChange function to update new change to your editor.

**NOTE: You have to add corresponding plugins to your editor!**

You will need to pass icon classnames as props into your components ([supported classes](../quill-icons#props)), you could look at the example [how to setup your icon's styles](https://github.com/Canner/canner-slate-editor/blob/master/stories/components/slate-icons/style.css)

```js
class App extends React.Component {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue // your slate editor's initial value
  };

  render() {
    const { value } = this.state;
    const onChange = ({ value }) => this.setState({ value });

    return (
      <div style={{ margin: "50px" }}>
        <div className="toolbar">
          {icons.map((Type, i) => {
            return (
              <Type
                change={value.change()}
                onChange={onChange}
                key={i}
                className="toolbar-item"
                activeClassName="toolbar-item-active"
                activeStrokeClassName="ql-stroke-active"
                activeFillClassName="ql-fill-active"
                activeThinClassName="ql-thin-active"
                activeEvenClassName="ql-even-active"
              />
            );
          })}
        </div>
        <div className="editor markdown-body">
          <Editor
            value={value}
            onChange={onChange}
            plugins={plugins} // ----> use corresponding plugins of your selected icons, for example `Bold` icon use `BoldPlugin`
          />
        </div>
      </div>
    );
  }
}
```

The best explanation is a simple example: https://github.com/Canner/canner-slate-editor/blob/master/stories/components/slate-icons/index.js

## Icon and selectors' props

All icons must passed these two props to ensure working properly.

| **props** | **type** | **required** | **default**              | **description**                                                                    |
| --------- | -------- | ------------ | ------------------------ | ---------------------------------------------------------------------------------- |
| type      | string   | false        | each icons are different | customized block/mark types                                                        |
| change    | object   | true         | null                     | changes to value                                                                   |
| onChange  | func     | true         | null                     | onChange function usually `change => this.setState({value})` to update slate state |
