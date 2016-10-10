import React, {Component, PropTypes} from 'react';
import {utils} from 'slate-plugins';
import FontAwesome from 'react-fontawesome';
const {preventDefault} = utils.defaultFunc;

export default class ToolbarIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    state: PropTypes.object
  };

  render() {
    const {type, icon, onClick, activeClassName,
      isActive, className, state, ...rest} = this.props; // eslint-disable-line no-unused-vars
    return (
      <span
        key={type}
        className={isActive ? activeClassName : className}
        onClick={onClick}
        onMouseDown={preventDefault} data-active={isActive}>
        <FontAwesome name={icon} {...rest}/>
      </span>
    );
  }
}
