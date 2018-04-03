// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import {HR} from '@canner/slate-constant/lib/blocks';
import ToolbarIcon from '@canner/slate-icon-shared';

export const HrPlugin = (opt) => {
  const options = Object.assign({
    hrType: HR,
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.hrType)
        return <hr/>;
    }
  }
}

export default class HRIcon extends React.Component<IconProps> {
  typeName: string
  constructor(props: IconProps) {
    super(props);

    this.typeName = this.props.type || HR;
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    e.preventDefault();
    onChange(
      change.insertBlock({
        type: this.typeName,
        isVoid: true
      })
      .collapseToStartOfNextBlock()
    );
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      // $FlowFixMe
      <ToolbarIcon
        type={this.typeName}
        icon={icon || 'HorizontalRule'}
        onClick={onClick}
        {...rest}
      />
    );
  }
};
