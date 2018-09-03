import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Speech extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path className={strokeClassName} d="M5,8a4,4,0,0,0,8,0" />
        <line className={strokeClassName} x1="6" x2="12" y1="15" y2="15" />
        <line className={strokeClassName} x1="9" x2="9" y1="12" y2="15" />
        <rect
          className={fillClassName}
          height="8"
          rx="2"
          ry="2"
          width="4"
          x="7"
          y="2"
        />
      </svg>
    );
  }
}
