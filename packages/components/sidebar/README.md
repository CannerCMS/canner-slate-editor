# slate-sidebar [![NPM version][npm-image]][npm-url]

> Quick and easy way to implement sidebar menu in your [slate editor](https://docs.slatejs.org)

![demo](https://github.com/Canner/canner-slate-editor/blob/master/preview/sidebar-demo.gif?raw=true)

## Installation

```sh
$ npm install --save slate-sidebar
```

## Usage

`slate-sidebar` is the easiest way to implement a medium-like sidebar in your slate editor.

Just add a decorator `@sidebar()` on you editor component. The parent component of this component must pass two props `value: Value` and `onChange: (change: Change) => void`.

```js
import sidebar from "slate-sidebar";

@sidebar() // ----> Add this line and your sidebar is implemented in your editor
class EditorContainer extends React.Component<Props> {
  // On change, update the app's React state with the new editor state.
  render() {
    return (
      <div className="editor">
        <Editor {...this.props} />
      </div>
    );
  }
}

class App extends React.Component<{}, { value: Value }> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  };

  render() {
    return (
      <div className="container markdown-body">
        <EditorContainer
          value={this.state.value}
          onChange={({ value }) => this.setState({ value })}
          plugins={plugins}
        />
      </div>
    );
  }
}
```

see [storybook codes](https://github.com/Canner/canner-slate-editor/tree/master/stories/components/sidebar) for full implementation and demo

## Options

`slate-sidebar` is fully customizable, so it allows you to pass options to setup items you want to implement in your sidebar.

**NOTE: Remember to add certain plugin to your editor's plugins**

[Select your icons here](https://github.com/Canner/slate-editor-icons#slate-editor-icons)

There's an example

```js
const options = {
  icons: [
    {
      icon: OlList,
      title: "Order List"
    },
    {
      icon: UlList,
      title: "Unorder List"
    },
    {
      icon: Header1,
      title: "Header One"
    },
    {
      icon: Header2,
      title: "Header Two"
    }
  ],
  leftOffset: 20 // offset to left default -20
};
```

## Start example server

```
npm start
```

<a href="https://canner.io">
  <img src="https://user-images.githubusercontent.com/26116324/37811196-a437d930-2e93-11e8-97d8-0653ace2a46d.png"/>
</a>

[npm-image]: https://badge.fury.io/js/slate-sidebar.svg
[npm-url]: https://npmjs.org/package/slate-sidebar
