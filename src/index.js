// @flow
import * as React from "react";
import type { Value, Change } from "slate";
import { Editor } from "slate-react";
import EditPrism from "slate-prism";
import EditBlockquote from "slate-edit-blockquote";
import EditList from "slate-edit-list";
import PluginEditCode from "slate-edit-code";
import {DEFAULT as DEFAULT_LIST} from "@canner/slate-helper-block-list";
import BLOCKS from "markup-it/lib/constants/blocks";
import MARKS from "markup-it/lib/constants/marks";
import INLINES from "markup-it/lib/constants/inlines";

// blocks
import {BlockquotePlugin} from '@canner/slate-icon-blockquote';
import {ListPlugin} from '@canner/slate-icon-list';
import {CodeBlockPlugin} from '@canner/slate-icon-codeblock';
import {HrPlugin} from '@canner/slate-icon-hr';
import {LinkPlugin} from '@canner/slate-icon-link';
import {ImagePlugin} from '@canner/slate-icon-image';
import {
  HeaderOnePlugin,
  HeaderTwoPlugin,
  HeaderThreePlugin,
  HeaderFourPlugin,
  HeaderFivePlugin,
  HeaderSixPlugin
} from '@canner/slate-icon-header';
import {ParagraphPlugin} from '@canner/slate-icon-shared';

// marks plugin
import {BoldPlugin} from '@canner/slate-icon-bold';
import {CodePlugin} from '@canner/slate-icon-code';
import {StrikeThroughPlugin} from '@canner/slate-icon-strikethrough';
import {UnderlinePlugin} from '@canner/slate-icon-underline';
import {ItalicPlugin} from '@canner/slate-icon-italic';

import mdPlugin from "./markdownPlugin";
import "prismjs/themes/prism.css";
import "github-markdown-css";

export const MarkdownPlugin = mdPlugin;

export default (opt: { [string]: any } = {}) => {
  const options = Object.assign(
    {
      markdownOption: {
        blocks: Object.assign(BLOCKS, opt.blocks),
        marks: Object.assign(MARKS, opt.marks),
        inlines: Object.assign(INLINES, opt.inlines)
      },
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

  const mdEditorPlugins = [
    MarkdownPlugin(options.markdownOption),
    EditPrism(options.prismOption),
    PluginEditCode(options.codeOption),
    EditBlockquote(options.blockquoteOption),
    EditList(options.listOption),
    BlockquotePlugin(options.blockquoteOption),
    ListPlugin(options.listOption),
    CodeBlockPlugin(options.codeOption),
    HrPlugin(),
    LinkPlugin(),
    ImagePlugin(),
    HeaderOnePlugin(),
    HeaderTwoPlugin(),
    HeaderThreePlugin(),
    HeaderFourPlugin(),
    HeaderFivePlugin(),
    HeaderSixPlugin(),
    ParagraphPlugin(),
    BoldPlugin(),
    CodePlugin(),
    StrikeThroughPlugin(),
    UnderlinePlugin(),
    ItalicPlugin()
  ];

  type Props = {
    value: Value,
    onChange: (change: Change) => void
  };

  return class MdEditor extends React.Component<Props> {
    render() {
      const { value, onChange, plugins, ...rest } = this.props;
      return (
        <div className="markdown-body">
          <Editor
            value={value}
            plugins={[...mdEditorPlugins, ...(plugins || [])]}
            onChange={onChange}
            {...rest}
          />
        </div>
      );
    }
  };
};
