import React, {Component, PropTypes} from 'react';
import {utils} from 'slate-plugins';
import FontAwesome from 'react-fontawesome';
const {preventDefault} = utils.defaultFunc;

export default class ToolbarIcon extends Component {
  static propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool
  };

  render() {
    const {type, icon, onClick, isActive, ...rest} = this.props;
    return (
      <span key={type} className="slate-toolbar-item" onClick={onClick}
        onMouseDown={preventDefault} data-active={isActive}>
        <FontAwesome name={icon} {...rest}/>
      </span>
    );
  }
}
