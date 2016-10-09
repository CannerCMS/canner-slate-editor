/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {blocks, utils} from 'slate-plugins';
const {setListBlock} = blocks;
const {isList} = utils.is;

export default (type, defaultIcon) => Block => {
  return class pluginDecoration extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    displayName = this.props.type || type;
    static propTypes = {
      type: PropTypes.string,
      icon: PropTypes.string,
      state: PropTypes.object,
      onChange: PropTypes.func
    };

    onClick(e) {
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(setListBlock(state, this.displayName));
    }

    render() {
      const {state, icon} = this.props;
      const onClick = e => this.onClick(e);

      return (
        <Block
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isList(state, type)}
        />
      );
    }
  };
};
