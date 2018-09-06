import * as React from "react";
import { Value } from "slate";
import { State } from "markup-it";
import markdown from "markup-it/lib/markdown";
import Editor from "packages/editors/slate-md-editor/src";
import testMd from "./test.md";

import "antd/dist/antd.css";

const mdParser = State.create(markdown);
const MdEditor = Editor();

class App extends React.Component {
  constructor(props) {
    super(props);
    const document = mdParser.deserializeToDocument(testMd);

    this.state = {
      value: Value.create({ document })
    };
  }

  onChange = ({ value }) => {
    console.log("onchange");
    this.setState({
      value
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={{ margin: "40px" }}>
        <MdEditor value={value} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
