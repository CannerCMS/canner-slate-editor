// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import {haveDataKeyEqualValueInSomeBlocks} from '@canner/slate-util-have';
import blockAddData from '@canner/slate-helper-block-adddata';
import blockClearDataByKey from '@canner/slate-helper-block-cleardatabykey';

type Props = IconProps;

export default (type: string, defaultIcon: string, align: string) =>
  (Block: React.Element<any>) => {
  return class AlignDecorator extends React.Component<Props> {
    typeName: string

    constructor(props: Props) {
      super(props);

      this.typeName = props.type || type;
    }

    onClick = (e: Event) => {
      e.preventDefault();
      let {change, onChange} = this.props;
      const isActive = haveDataKeyEqualValueInSomeBlocks(change, type, align);
      onChange(
        isActive ? blockClearDataByKey(change, this.typeName) :
          blockAddData(change, {data: {[this.typeName]: align}})
      );
    }

    render() {
      const {change, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveDataKeyEqualValueInSomeBlocks(change, type, align);

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
