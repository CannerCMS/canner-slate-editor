// @flow
import React, {Component, PropTypes} from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon from '@canner/slate-icon-shared';
import blockquote, {DEFAULT} from '@canner/slate-helper-block-quote';
import EditBlockquote from 'slate-edit-blockquote'

const {isSelectionInBlockquote} = EditBlockquote(DEFAULT).utils;

type Props = IconProps;

export default class Blockquote extends Component<Props> {
  typeName: string

  constructor(props: Props) {
    super(props);

    this.typeName = props.type || 'blockquote';
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
        isActive={isSelectionInBlockquote(change.value)}
        {...rest}
      />
    );
  }
}
