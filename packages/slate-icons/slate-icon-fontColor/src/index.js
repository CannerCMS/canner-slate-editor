// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon, {markAttrs} from '@canner/slate-icon-shared';
import addMarkOverwrite from '@canner/slate-helper-mark-addoverwrite';
import {haveMarks} from '@canner/slate-util-have';
import {getMarkType} from '@canner/slate-util-get';
import ColorPicker from 'rc-color-picker';
import hexRgb from 'hex-rgb';
import omit from 'lodash.omit';
import {FONTCOLOR} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

import 'rc-color-picker/assets/index.css';

export const FontColorPlugin = (opt) => {
  const options = Object.assign({
    type: FONTCOLOR,
    tagName: 'span',
    color: markAttrs.color
  }, opt);

  return {
    renderMark: (props) => {
      if (props.mark.type === options.type) 
        return commonMark(options.tagName, omit(options, ['type', 'tagName']))(props);
    }
  }
}


export default class fontColor extends React.Component<IconProps> {
  typeName: string
  constructor(props) {
    super(props);
    this.typeName = this.props.type || FONTCOLOR;
  }
  
  static defaultProps = {
    colorKey: 'color'
  }

  onChange = (color: {color: string, alpha: number, open: boolean}) => {
    let {change, onChange, colorKey} = this.props;

    // $FlowFixMe
    color.rgba = `rgba(${hexRgb(color.color, {format: 'array'}).join(',')}, ${color.alpha / 100})`;
    this.setState({color});
    onChange(addMarkOverwrite(change, {type: this.typeName, data: {[colorKey]: color}}));
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
        stroke: color,
        opacity: alpha
      };
    }

    return (
      <ColorPicker onChange={this.onChange}>
        <ToolbarIcon
          colorStyle={colorStyle}
          type={this.typeName}
          icon={icon || 'Color'}
          onClick={e => e.preventDefault()}
          isActive={isActive}
          {...rest}
        />
      </ColorPicker>
    );
  }
}
