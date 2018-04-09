// @flow
import * as React from "react";
import type { Value, Change } from "slate";
import { Editor } from "slate-react";
import EditPrism from "slate-prism";
import EditBlockquote from "slate-edit-blockquote";
import EditList from "slate-edit-list";
import PluginEditCode from "slate-edit-code";
import DEFAULT_LIST from "./constant/list";
import BLOCKS from "markup-it/lib/constants/blocks";

import mdPlugin from "./markdownPlugin";
import "prismjs/themes/prism.css";
import "github-markdown-css";

export const MarkdownPlugin = mdPlugin;

export default (opt: { [string]: any }) => {
  const options = Object.assign(
    {
      markdownOption: {},
      prismOption: {
        onlyIn: node => node.type === BLOCKS.CODE,
        getSyntax: node => node.data.get("syntax")
      },
      codeOption: {
        onlyIn: node => node.type === BLOCKS.CODE
      },
      blockquoteOption: {},
      listOption: DEFAULT_LIST
    },
    opt
  );

  const plugins = [
    MarkdownPlugin(options.markdownOption),
    EditPrism(options.prismOption),
    PluginEditCode(options.codeOption),
    EditBlockquote(options.blockquoteOption),
    EditList(options.listOption)
  ];

  type Props = {
    value: Value,
    onChange: (change: Change) => void
  };

  return class MdEditor extends React.Component<Props> {
    render() {
      const { value, onChange, ...rest } = this.props;
      return (
        <div className="markdown-body">
          <Editor
            value={value}
            plugins={plugins}
            onChange={onChange}
            {...rest}
          />
        </div>
      );
    }
  };
};
