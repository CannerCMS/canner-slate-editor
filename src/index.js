// @flow
import * as React from 'react';
import type {Value, Change} from 'slate';
import { Editor } from 'slate-react'
import EditPrism from 'slate-prism';
import EditBlockquote from 'slate-edit-blockquote';
import EditList from 'slate-edit-list'
import PluginEditCode from 'slate-edit-code';
import DEFAULT_LIST from './constant/list';
import mdPlugin from './markdownPlugin';
import "prismjs/themes/prism.css"

export const MarkdownPlugin = mdPlugin;

const plugins = [
  MarkdownPlugin(),
  EditPrism({
    onlyIn: node => node.type === 'code_block',
    getSyntax: node => node.data.get('syntax')
  }),
  PluginEditCode({
    onlyIn: node => node.type === 'code_block'
  }),
  EditBlockquote(),
  EditList(DEFAULT_LIST)
];

type Props = {
  value: Value,
  onChange: (change: Change) => void
}

export default class MdEditor extends React.Component<Props> {
  render() {
    const {value, onChange} = this.props;
    return (
      <Editor
        value={value}
        plugins={plugins}
        onChange={onChange}
      />
    );
  }
}