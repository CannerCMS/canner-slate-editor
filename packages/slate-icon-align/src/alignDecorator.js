// @flow
import * as React from 'react';
import {type Change} from 'slate';
import {type IconProps} from 'shared/src/types';
import {haveDataKeyInSomeBlocks} from '@canner/slate-util-have';
import blockAddData from '@canner/slate-helper-block-adddata';
import blockClearDataByKey from '@canner/slate-helper-block-cleardatabykey';

type Props = IconProps;

export default (type: string, defaultIcon: string, align: string) => (Block: React.Element<*>) => {
  return class AlignDecorator extends React.Component<Props> {

    onClick = (e: Event) => {
      e.preventDefault();
      let {change, onChange} = this.props;
      const isActive = haveDataKeyInSomeBlocks(change, type, align);
      onChange(
        isActive ? blockClearDataByKey(change, type) :
          blockAddData(change, {data: {[type]: align}})
      );
    }

    render() {
      const {change, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveDataKeyInSomeBlocks(change, type, align);

      return (
        <Block
          type={this.props.type || type}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isActive}
          {...rest}
        />
      );
    }
  };
};
