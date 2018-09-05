# canner-slate-editor

> Another rich text editor using [Slate framework](https://docs.slatejs.org).

## Installation

```sh
$ npm install --save canner-slate-editor
```

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

see https://github.com/Canner/canner-slate-editor/blob/master/docs/index.js

## Start example server

```
npm start
```

## License

Apache 2.0 [Canner](https://www.canner.io)
