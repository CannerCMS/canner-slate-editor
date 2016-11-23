/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {utils} from 'slate-plugins';
const {haveBlocks} = utils.have;

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
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(
        state.transform()
            .insertBlock({type: this.displayName, data: {align}})
            .apply()
      );
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
