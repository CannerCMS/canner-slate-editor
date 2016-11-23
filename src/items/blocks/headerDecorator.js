/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {blocks, utils} from 'slate-plugins';
const {heading} = blocks;
const {haveBlocks} = utils.have;

export default (type, defaultIcon) => Block => {
  return class HeaderDecorator extends Component {
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
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(heading(state, {type: this.displayName}));
    }

    render() {
      const {state, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveBlocks(state, this.displayName);

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
