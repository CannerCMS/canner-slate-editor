// @flow
import * as React from 'react';
import {type Change} from 'slate';
import basicMarkDecoration from './basicMarkDecoration';
import QuillIcons from 'quill-icons';

type Props = {
  className?: string,
  strokeClassName?: string,
  fillClassName?: string,
  evenClassName?: string,
  transparentClassName?: string,
  strokeMitterClassName?: string,
  colorLabelClassName?: string,
  thinClassName?: string,
  activeClassName?: string,
  activeStrokeClassName?: string,
  activeFillClassName?: string,
  activeEvenClassName?: string,
  activeTransparentClassName?: string,
  activeStrokeMitterClassName?: string,
  activeColorLabelClassName?: string,
  activeThinClassName?: string,
  colorStyle?: {[string]: string},
  type: string,
  icon: string,
  onClick?: (e: Event) => void,
  isActive?: bool,
  change: Change
}

export const basicMarkDecorator = basicMarkDecoration;

export default class ToolbarIcon extends React.Component<Props> {
  render() {
    const {
      type,
      icon,
      onClick,
      isActive,
      activeClassName,
      activeStrokeClassName,
      activeFillClassName,
      activeEvenClassName,
      activeTransparentClassName,
      activeStrokeMitterClassName,
      activeColorLabelClassName,
      activeThinClassName,
      strokeClassName,
      fillClassName,
      evenClassName,
      transparentClassName,
      strokeMitterClassName,
      colorLabelClassName,
      thinClassName,
      className,
      colorStyle,
      change, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const iconClassName = isActive ? activeClassName : className;
    const iconStrokeClassName = isActive ? activeStrokeClassName : strokeClassName;
    const iconStrokeMitterClassName = isActive ? activeStrokeMitterClassName : strokeMitterClassName;
    const iconFillClassName = isActive ? activeFillClassName : fillClassName;
    const iconEvenClassName = isActive ? activeEvenClassName : evenClassName;
    const iconColorLabelClassName = isActive ? activeColorLabelClassName : colorLabelClassName;
    const iconTransparentClassName = isActive ? activeTransparentClassName : transparentClassName;
    const iconThinClassName = isActive ? activeThinClassName : thinClassName;

    const fontElement = React.createElement(
      QuillIcons[icon],
      Object.assign({...rest}, {
        colorStyle: colorStyle,
        className: iconClassName,
        strokeClassName: iconStrokeClassName,
        strokeMitterClassName: iconStrokeMitterClassName,
        fillClassName: iconFillClassName,
        evenClassName: iconEvenClassName,
        colorLabelClassName: iconColorLabelClassName,
        transparentClassName: iconTransparentClassName,
        thinClassName: iconThinClassName
      })
    );

    return (
      <span
        key={type}
        onClick={onClick}
        onMouseDown={arg => arg}
        data-active={isActive || false}>
        {fontElement}
      </span>
    );
  }
}
