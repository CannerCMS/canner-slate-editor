// @flow
import * as React from 'react';
import {type Change} from 'slate';
import basicMarkDecoration from './basicMarkDecoration';
import {PARAGRAPH} from '@canner/slate-constant/lib/blocks';
import {FONTSIZE, LETTERSPACING} from '@canner/slate-constant/lib/marks';
import QuillIcons from 'quill-icons';
import commonNode from '@canner/slate-editor-renderer/lib/commonNode';
import omit from 'lodash.omit';
import cx from 'classnames';

export const basicMarkDecorator = basicMarkDecoration;
export const nodeAttrs = {
  textAlign: (node) => node.data.get('align'),
  paddingLeft: (node) => node.data.get('indent') ? `${3 * node.data.get('indent')}em` : undefined,
  lineHeight: (node) => node.data.get('lineHeight'),
  width: (node) => node.data.get('width'),
  height: (node) => node.data.get('height'),
  src: (node) => node.data.get('src')
}

export const markAttrs = {
  backgroundColor: (mark) => mark.data.getIn(['color', 'color']),
  color: (mark) => mark.data.getIn(['color', 'color']),
  fontSize: (mark) => mark.data.get(FONTSIZE),
  letterSpacing: (mark) => mark.data.get(LETTERSPACING)
}

type Props = {
  className?: string,
  strokeClassName?: string,
  fillClassName?: string,
  evenClassName?: string,
  transparentClassName?: string,
  strokeMitterClassName?: string,
  colorLabelClassName?: string,
  disableClassName?: string,
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
  disabled?: bool,
  change: Change,
  onChange: (change: Change) => void
}

export const ParagraphPlugin = (opt) => {
  const options = Object.assign({
    type: PARAGRAPH,
    tagName: 'p',
    ...nodeAttrs
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.type)
        return commonNode(options.tagName, omit(options, ['type', 'tagName']))(props);
    }
  }
}

export default class ToolbarIcon extends React.Component<Props> {
  render() {
    const {
      type,
      icon,
      onClick,
      disabled,
      isActive,
      disableClassName,
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
      onChange
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
      Object.assign({
        onChange: onChange,
        colorStyle: colorStyle,
        className: disabled ? cx(iconClassName, disableClassName) : iconClassName,
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
        onMouseDown={e => e.preventDefault()}
        data-active={isActive || false}>
        {fontElement}
      </span>
    );
  }
}
