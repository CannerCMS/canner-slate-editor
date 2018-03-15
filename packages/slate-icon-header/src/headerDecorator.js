// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import heading from '@canner/slate-helper-block-heading';
import {haveBlocks} from '@canner/slate-util-have';

export default (type: string, defaultIcon: string) => (Block: React.Element<*>) => {
  return class HeaderDecorator extends React.Component<IconProps> {
    typeName: string
    constructor(props: IconProps) {
      super(props);

      this.typeName = this.props.type || type;
    }

    onClick = (e: Event) => {
      let {change, onChange} = this.props;
      e.preventDefault();
      onChange(heading(change, {type: this.typeName}));
    }

    render() {
      const {change, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveBlocks(change, this.typeName);

      return (
        // $FlowFixMe
        <Block
          type={this.typeName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isActive}
          {...rest}
        />
      );
    }
  };
};
