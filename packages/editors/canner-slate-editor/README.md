# canner-slate-editor [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

## Installation

```sh
$ npm install --save canner-slate-editor
```

## Image upload

In order to make image uploader work, you have to pass a prop called `serviceConfig`. `serviceConfig` can generate from https://github.com/Canner/image-service-config or you can directly pass props from https://ant.design/components/upload/ as object into `serviceConfig` prop.

## Usage

```js
// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Value } from "slate";

import CannerEditor from "canner-slate-editor";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A line of text in a paragraph."
              }
            ]
          }
        ]
      }
    ]
  }
});

class DemoEditor extends React.Component<*, { value: Value }> {
  // Set the initial state when the app is first constructed.
  state = {
    value: initialValue
  };

  render() {
    const { value } = this.state;
    const onChange = ({ value }) => this.setState({ value });

    return (
      <div style={{ margin: "20px" }}>
        <CannerEditor value={value} onChange={onChange} />
      </div>
    );
  }
}

ReactDOM.render(<DemoEditor />, (document: any).getElementById("root"));
```

see https://github.com/Canner/canner-slate-editor/blob/master/stories/components/canner-slate-editor/index.js

## Customization

You are able to customize the toolbar as you like. Just pass as prop `menuToolbarOption`.

Value should be as below.

```js
const menuToolbarOption = [
  { type: Undo, title: "Undo" },
  { type: Redo, title: "Redo" },
  "seperator",
  { type: Header1, title: "Header One" },
  { type: Header2, title: "Header Two" },
  { type: Header3, title: "Header Three" },
  { type: Blockquote, title: "Blockquote" },
  { type: Hr, title: "Ruler" },
  "seperator",
  { type: AlignLeft, title: "Align Left" },
  { type: AlignCenter, title: "Align Center" },
  { type: AlignRight, title: "Align Right" },
  { type: Indent, title: "Indent" },
  { type: Outdent, title: "Outdent" },
  "seperator",
  { type: OlList, title: "Order List" },
  { type: UlList, title: "Unorder List" },
  "seperator",
  { type: Link, title: "Link" },
  { type: "image", title: "Image" },
  { type: Video, title: "Video" },
  { type: CodeBlock, title: "Code Bloack" },
  { type: Table, title: "Table" },
  "seperator",
  { type: FontColor, title: "Font Color" },
  { type: FontBgColor, title: "Font Background Color" },
  "seperator",
  { type: "fullScreen", title: "Full Screen" }
];
```
