/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {blocks, utils} from 'slate-plugins';
const {setListBlock} = blocks;
const {isList} = utils.is;

export default (type, opt) => Block => {
  return class pluginDecoration extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    displayName = type;
    static propTypes = {
      state: PropTypes.object,
      onChange: PropTypes.func
    };

    onClick(e) {
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(setListBlock(state, this.displayName));
    }

    render() {
      const {state} = this.props;
      const onClick = e => this.onClick(e);

      return (
        <Block
          type={this.displayName}
          icon={opt.icon}
          onClick={onClick}
          isActive={isList(state, type)}
        />
      );
    }
  };
};
