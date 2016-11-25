import React, {Component, PropTypes} from 'react';
import {utils} from 'slate-plugins';
import QuillIcons from 'quill-icons';
import {assign} from 'lodash';
const {preventDefault} = utils.defaultFunc;

export default class ToolbarIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    strokeClassName: PropTypes.string,
    fillClassName: PropTypes.string,
    evenClassName: PropTypes.string,
    transparentClassName: PropTypes.string,
    strokeMitterClassName: PropTypes.string,
    colorLabelClassName: PropTypes.string,
    thinClassName: PropTypes.string,
    activeClassName: PropTypes.string,
    activeStrokeClassName: PropTypes.string,
    activeFillClassName: PropTypes.string,
    activeEvenClassName: PropTypes.string,
    activeTransparentClassName: PropTypes.string,
    activeStrokeMitterClassName: PropTypes.string,
    activeColorLabelClassName: PropTypes.string,
    activeThinClassName: PropTypes.string,
    colorStyle: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    state: PropTypes.object
  };

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
      state, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    /* eslint-disable max-len */
    const iconClassName = isActive ? activeClassName : className;
    const iconStrokeClassName = isActive ? activeStrokeClassName : strokeClassName;
    const iconStrokeMitterClassName = isActive ? activeStrokeMitterClassName : strokeMitterClassName;
    const iconFillClassName = isActive ? activeFillClassName : fillClassName;
    const iconEvenClassName = isActive ? activeEvenClassName : evenClassName;
    const iconColorLabelClassName = isActive ? activeColorLabelClassName : colorLabelClassName;
    const iconTransparentClassName = isActive ? activeTransparentClassName : transparentClassName;
    const iconThinClassName = isActive ? activeThinClassName : thinClassName;
    /* exlint-enable */

    const fontElement = React.createElement(
      QuillIcons[icon],
      assign(...rest, {
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
        onMouseDown={preventDefault}
        data-active={isActive || false}>
        {fontElement}
      </span>
    );
  }
}
