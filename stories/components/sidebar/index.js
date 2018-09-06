// @flow
import React from "react";
import { Modal, Button } from "antd";
import { Editor } from "slate-react";
import { Value, Change } from "slate";
import {
  Header1,
  Header2,
  HeaderOnePlugin,
  HeaderTwoPlugin
} from "@canner/slate-icon-header";
import { OlList, UlList, ListPlugin } from "slateIcons/list";
import { ParagraphPlugin } from "slateIcons/shared";
import sidebar from "packages/components/sidebar/src";

import { DEFAULT as DEFAULTLIST } from "changes/block-list";
import { DEFAULT as DEFAULTBLOCKQUOTE } from "changes/block-quote";
import EditList from "slate-edit-list";
import EditBlockquote from "slate-edit-blockquote";

import "./style.css";
import "github-markdown-css";

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
  ]
};

type Props = {
  value: Value,
  onChange: (change: Change) => void
};

const plugins = [
  EditList(DEFAULTLIST),
  EditBlockquote(DEFAULTBLOCKQUOTE),
  ListPlugin(),
  HeaderOnePlugin(),
  HeaderTwoPlugin(),
  ParagraphPlugin()
];

@sidebar(options)
class EditorContainer extends React.Component<Props> {
  // On change, update the app's React state with the new editor state.
  render() {
    return <Editor {...this.props} />;
  }
}

export default class App extends React.Component<
  {},
  { value: Value, visible: boolean }
> {
  // Set the initial state when the app is first constructed.
  constructor(props: {}) {
    super(props);

    this.state = {
      value: initialValue,
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = () => {
    this.setState({
      visible: false
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="editor container markdown-body">
        {!this.state.visible && (
          <EditorContainer
            value={this.state.value}
            onChange={this.onChange}
            plugins={plugins}
          />
        )}

        <div>
          <Button type="primary" onClick={this.showModal}>
            Open in Modal
          </Button>
          <Modal
            title="Test sidebar in modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <EditorContainer
              value={this.state.value}
              onChange={({ value }) => this.setState({ value })}
              plugins={plugins}
            />
          </Modal>
        </div>
      </div>
    );
  }
}
