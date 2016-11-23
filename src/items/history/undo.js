/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {history} from 'slate-plugins';
const {undo} = history;

export default class Undo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  displayName = this.props.type || 'undo';
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
  };

  onClick(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(undo(state));
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);
    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'Undo'}
        onClick={onClick}
        {...rest}
      />
    );
  }
}
