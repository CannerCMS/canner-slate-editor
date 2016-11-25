/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {marks, utils} from 'slate-plugins';
import ToolbarIcon from '../toolbarIcon';
import ColorPicker from '@canner/rc-color-picker';
import "../../color-picker.css";
const {addMarkOverwrite} = marks;
const {haveMarks} = utils.have;
const {getMarkType} = utils.get;

export default class fontColor extends Component {
  constructor(props) {
    super(props);

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
    onChange(addMarkOverwrite(state, {type: this.displayName, data: color}));
  }

  render() {
    const {icon, state, ...rest} = this.props;
    const isActive = haveMarks(state, this.displayName);
    let colorStyle = {};

    if (isActive) {
      const first = getMarkType(state, this.displayName).first().get('data');
      const color = first.get('color');
      const alpha = first.get('alpha');

      colorStyle = {
        stroke: color,
        opacity: alpha
      };
    }

    return (
      <ColorPicker color="#000" onChange={this.onChange}>
        <ToolbarIcon
          colorStyle={colorStyle}
          type={this.displayName}
          icon={icon || 'Color'}
          onClick={e => e.preventDefault()}
          isActive={isActive}
          {...rest}
        />
      </ColorPicker>
    );
  }
}
