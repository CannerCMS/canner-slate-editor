// @flow
import * as React from "react";
import { Table } from "antd";

const hotKeyColumns = [
  {
    title: "Action",
    dataIndex: "action",
    fixed: true
  },
  {
    title: "Hot Key",
    dataIndex: "hotKey"
  }
];

const formattingColumns = [
  {
    title: "Action",
    dataIndex: "action",
    fixed: true
  },
  {
    title: "Formatting Keys",
    dataIndex: "formattingKey"
  }
];

const cmdHotKeyData = [
  {
    key: "copy",
    action: "Copy",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>c</kbd>
      </span>
    )
  },
  {
    key: "cut",
    action: "Cut",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>x</kbd>
      </span>
    )
  },
  {
    key: "paste",
    action: "Paste",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>v</kbd>
      </span>
    )
  },
  {
    key: "undo",
    action: "Undo",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>z</kbd>
      </span>
    )
  },
  {
    key: "bold",
    action: "Bold",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>b</kbd>
      </span>
    )
  },
  {
    key: "italic",
    action: "Italic",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>i</kbd>
      </span>
    )
  },
  {
    key: "underline",
    action: "Underline",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>u</kbd>
      </span>
    )
  },
  {
    key: "exitCode",
    action: "Exit Code Block",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>Enter</kbd> in code blocks
      </span>
    )
  }
];

const optHotKeyData = [
  {
    key: "strikethrough",
    action: "Strikethrough",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>Opt</kbd> + <kbd>d</kbd>
      </span>
    )
  },
  {
    key: "boldItalic",
    action: "Bold + Italic",
    hotKey: (
      <span>
        <kbd>CMD</kbd> + <kbd>Opt</kbd> + <kbd>b</kbd>
      </span>
    )
  },
  {
    key: "header1",
    action: "Header 1",
    hotKey: (
      <span>
        <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>1</kbd>
      </span>
    )
  },
  {
    key: "header2",
    action: "Header 2",
    hotKey: (
      <span>
        <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>2</kbd>
      </span>
    )
  },
  {
    key: "header3",
    action: "Header 3",
    hotKey: (
      <span>
        <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>3</kbd>
      </span>
    )
  },
  {
    key: "blockquote",
    action: "Blockquote",
    hotKey: (
      <span>
        <kbd>Ctrl</kbd> + <kbd>opt</kbd> + <kbd>q</kbd>
      </span>
    )
  }
];

const formattingData = [
  {
    key: "blockquote",
    action: "Blockquote",
    formattingKey: ">[space]"
  },
  {
    key: "codeblock-inline",
    action: "Code Block (Inline)",
    formattingKey: "[space * 4]"
  },
  {
    key: "codeblock",
    action: "Code Block",
    formattingKey: "[` * 3][space] or [` * 3][lang][space]"
  },
  {
    key: "header",
    action: "Header 1 - 6",
    formattingKey: "[# * 1~6][space]"
  },
  {
    key: "hr",
    action: "Horizontal Line",
    formattingKey: "***[space] or --- [space]"
  },
  {
    key: "ul",
    action: "Unordered List",
    formattingKey: "*[space] or +[space] or -[space]"
  },
  {
    key: "ol",
    action: "Ordered List",
    formattingKey: "1.[space]"
  }
];

const formattingInlineData = [
  {
    key: "strikethrough",
    action: "Strikethrough",
    formattingKey: "~[strikethrough]~[space]"
  },
  {
    key: "bold",
    action: "Bold",
    formattingKey: "__[strong]__[space] or **[strong]**[space]"
  },
  {
    key: "italic",
    action: "Italic",
    formattingKey: "_[italic]_[space] or *[italic]*[space]"
  },
  {
    key: "boldItalic",
    action: "Bold + Italic",
    formattingKey:
      "___[strong + italic]___[space] or ***[strong + italic]***[space]"
  },
  {
    key: "link",
    action: "Link",
    formattingKey: '[example](http://example.com "Optional title")[space]'
  },
  {
    key: "image",
    action: "Image",
    formattingKey: '![example](http://example.com "Optional title")[space]'
  }
];

export default class HelpMenu extends React.Component<any> {
  render() {
    return (
      <div>
        <h3>Keyboard Shortcuts</h3>
        <h4>Default shortcuts. Command + key:</h4>
        <Table
          columns={hotKeyColumns}
          dataSource={cmdHotKeyData}
          size="small"
          pagination={false}
        />
        <h4 style={{ marginTop: "10px" }}>
          Additional shortcuts. Control + Option + key:
        </h4>
        <Table
          columns={hotKeyColumns}
          dataSource={optHotKeyData}
          size="small"
          pagination={false}
        />
        <h4 style={{ marginTop: "10px" }}>
          Formatting shortcuts.{" "}
          <b>
            Start a new paragraph with the shortcut and press (one or many)
            Space to apply the formatting.
          </b>
        </h4>
        <Table
          columns={formattingColumns}
          dataSource={formattingData}
          size="small"
          pagination={false}
        />
        <h4 style={{ marginTop: "10px" }}>
          Inline Formatting shortcuts.{" "}
          <b>Use these shortcuts to apply inline style changes.</b>
        </h4>
        <Table
          columns={formattingColumns}
          dataSource={formattingInlineData}
          size="small"
          pagination={false}
        />
      </div>
    );
  }
}
