import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";
import cx from "classnames";
const pickProperties = [
  "width",
  "height",
  "strokeClassName",
  "colorLabelClassName",
  "transparentClassName",
  "colorStyle"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);
const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Color extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const {
      strokeClassName,
      colorLabelClassName,
      transparentClassName,
      colorStyle,
      ...rest
    } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line
          className={cx(
            strokeClassName,
            colorLabelClassName,
            transparentClassName
          )}
          style={colorStyle}
          x1="3"
          x2="15"
          y1="15"
          y2="15"
        />
        <polyline className={strokeClassName} points="5.5 11 9 3 12.5 11" />
        <line className={strokeClassName} x1="11.63" x2="6.38" y1="9" y2="9" />
      </svg>
    );
  }
}
