// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import {removeMarkAll} from '@canner/slate-helper-mark-removeall';
import ToolbarIcon from '@canner/slate-icon-shared';

export default class Clean extends React.Component<IconProps> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || 'clean';
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    e.preventDefault();
    onChange(removeMarkAll(change, {type: this.typeName, data: {}}));
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.typeName}
        icon={icon || 'Clean'}
        onClick={onClick}
        {...rest}
      />
    );
  }
}

