// @flow
import * as React from 'react';
import {type Change} from 'slate';
import {haveDataKeyInSomeBlocks} from '@canner/slate-util-have';
import blockAddData from '@canner/slate-helper-block-adddata';
import blockClearDataByKey from '@canner/slate-helper-block-cleardatabykey';

type Props = {
  type: string,
  icon: string,
  change: Change,
  onChange: (change: Change) => void
};

export default (type, defaultIcon, align) => Block => {
  return class AlignDecorator extends React.Component<Props> {
    constructor(props: Props) {
      super(props);

      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
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
