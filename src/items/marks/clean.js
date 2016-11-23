/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks} from 'slate-plugins';
import ToolbarIcon from '../toolbarIcon';
const {removeMarkAll} = marks;

export default class Clean extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  displayName = this.props.type || 'clean';

  static propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onClick(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(removeMarkAll(state, {type: this.displayName, data: {}}));
  }

  render() {
    const {icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'Clean'}
        onClick={onClick}
        {...rest}
      />
    );
  }
}
