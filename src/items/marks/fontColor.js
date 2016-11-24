/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks} from 'slate-plugins';
import ToolbarIcon from '../toolbarIcon';
import ColorPicker from '@canner/rc-color-picker';
import "nodeModules/@canner/rc-color-picker/assets/index.css";
const {addMarkOverwrite} = marks;

export default class fontColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  displayName = this.props.type || 'fontColor';

  static propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange(color) {
    let {state, onChange} = this.props;
    this.setState({color});
    onChange(addMarkOverwrite(state, {type: this.displayName, data: color}));
  }

  render() {
    const {icon, ...rest} = this.props;

    return (
      <ColorPicker color="#000" onChange={this.onChange}>
        <ToolbarIcon
          type={this.displayName}
          icon={icon || 'Color'}
          onClick={e => e.preventDefault()}
          {...rest}
        />
      </ColorPicker>
    );
  }
}
