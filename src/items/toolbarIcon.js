import React, {Component, PropTypes} from 'react';
import {utils} from 'slate-plugins';
const {preventDefault} = utils.defaultFunc;

export default class ToolbarIcon extends Component {
  static propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool
  };

  render() {
    const {type, icon, onClick, isActive} = this.props;
    return (
      <span key={type} className="slate-toolbar-item" onClick={onClick}
        onMouseDown={preventDefault} data-active={isActive}>
        <i className={`fa fa-${icon}`} />
      </span>
    );
  }
}
