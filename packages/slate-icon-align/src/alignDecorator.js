/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {utils, blocks} from 'slate-plugins';
const {haveDataKeyEqualValueInSomeBlocks} = utils.have;
const {clearDataByKeyToCurrent, addDataToCurrent} = blocks;

export default (type, defaultIcon, align) => Block => {
  return class AlignDecorator extends Component {
    constructor(props) {
      super(props);

      this.onClick = this.onClick.bind(this);
    }

    displayName = this.props.type || type;

    static propTypes = {
      type: PropTypes.string,
      icon: PropTypes.string,
      state: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired
    };

    onClick(e) {
      e.preventDefault();
      let {state, onChange} = this.props;
      const isActive = haveDataKeyEqualValueInSomeBlocks(state, type, align);
      onChange(
        isActive ? clearDataByKeyToCurrent(state, type) :
          addDataToCurrent(state, {data: {[type]: align}})
      );
    }

    render() {
      const {state, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveDataKeyEqualValueInSomeBlocks(state, type, align);

      return (
        <Block
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isActive}
          {...rest}
        />
      );
    }
  };
};
