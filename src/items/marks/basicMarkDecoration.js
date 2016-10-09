/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks, utils} from 'slate-plugins';
const {basicMark} = marks;
const {hasMarks} = utils.has;

export default (type, defaultIcon) => Mark => {
  return class basicMarkDecoration extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    displayName = this.props.type || type;
    static propTypes = {
      state: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired,
      type: PropTypes.string
    };

    onClick(e) {
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(basicMark(state, this.displayName));
    }

    render() {
      const {state, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      return (
        <Mark
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={hasMarks(state, this.displayName)}
          {...rest}
        />
      );
    }
  };
};
