// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon from '@canner/slate-icon-shared';
import addMarkOverwrite from '@canner/slate-helper-mark-addoverwrite';
import {haveMarks} from '@canner/slate-util-have';
import {getMarkType} from '@canner/slate-util-get';
import ColorPicker from 'rc-color-picker';
import hexRgb from 'hex-rgb';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

import 'rc-color-picker/assets/index.css';

export const FontBgColorPlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'fontBgColor') 
      return commonMark('span', 'backgroundColor', 'color')(props);
  }
}

export default class fontBgColor extends React.Component<IconProps, {color: Object}> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || 'fontBgColor';
    this.state = {
      color: {}
    };
  }

  onChange = (color: {color: string, alpha: number, open: boolean}) => {
    let {change, onChange} = this.props;

    // $FlowFixMe
    color.rgba = `rgba(${hexRgb(color.color, {format: 'array'}).join(',')}, ${color.alpha / 100})`;
    this.setState({color});
    onChange(
      addMarkOverwrite(change, {type: this.typeName, data: color})
        .collapseToStartOfNextText()
        .focus()
    );
  }

  render() {
    const {icon, change, ...rest} = this.props;
    const isActive = haveMarks(change, this.typeName);
    let colorStyle = {};

    if (isActive) {
      const first = getMarkType(change, this.typeName).first().get('data');
      const color = first.get('color');
      const alpha = first.get('alpha');

      colorStyle = {
        fill: color,
        opacity: alpha
      };
    }

    return (
      <ColorPicker
        onChange={this.onChange}>
        <ToolbarIcon
          colorStyle={colorStyle}
          type={this.typeName}
          icon={icon || 'Background'}
          isActive={isActive}
          {...rest}
        />
      </ColorPicker>
    );
  }
}
