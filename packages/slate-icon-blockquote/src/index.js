// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon, {nodeAttrs} from '@canner/slate-icon-shared';
import blockquote, {DEFAULT} from '@canner/slate-helper-block-quote';
import {BLOCKQUOTE} from '@canner/slate-constant/lib/blocks';
import EditBlockquote from 'slate-edit-blockquote'
import commonNode from '@canner/slate-editor-renderer/lib/commonNode';
import omit from 'lodash.omit';
import isHotkey from 'is-hotkey';

type Props = IconProps;

export const BlockquotePlugin = (opt) => {
  const options = Object.assign({
    type: BLOCKQUOTE,
    tagName: 'blockquote',
    ...nodeAttrs
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.type) 
        return commonNode(options.tagName, omit(options, ['type', 'tagName']))(props);
    },
    onKeyDown(event, change) {
      if (isHotkey('ctrl+opt+q', event)) {
        return blockquote(change, {type: options.type})
      }
    }
  }
}

export default class Blockquote extends React.Component<Props> {
  typeName: string

  constructor(props: Props) {
    super(props);

    this.typeName = props.type || BLOCKQUOTE;
    
    // change to customize type
    DEFAULT.type = this.typeName
    this.blockquote = EditBlockquote(DEFAULT).utils;
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    e.preventDefault();
    onChange(blockquote(change, {type: this.typeName}));
  }

  render() {
    const {change, icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.typeName}
        icon={icon || 'Blockquote'}
        onClick={onClick}
        isActive={this.blockquote.isSelectionInBlockquote(change.value)}
        {...rest}
      />
    );
  }
}
