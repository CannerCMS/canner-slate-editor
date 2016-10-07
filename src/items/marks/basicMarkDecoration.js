/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks, utils} from 'slate-plugins';
const {basicMark} = marks;
const {hasMarks} = utils.has;

export default (type, opt) => Mark => {
  return class basicMarkDecoration extends Component {
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
      onChange(basicMark(state, this.displayName));
    }

    render() {
      const {state} = this.props;
      const onClick = e => this.onClick(e);

      return (
        <Mark
          type={this.displayName}
          icon={opt.icon}
          onClick={onClick}
          isActive={hasMarks(state, this.displayName)}
        />
      );
    }
  };
};
